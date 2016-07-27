'use strict';

const ConversationService = require('../../../services/ConversationService'),
    AccountService = require('../../../services/AccountService'),
    logger = require('../../../utils/logger'),
    Davis = require('../../../core'),
    BbPromise = require('bluebird'),
    _ = require('lodash');

const RESPONSE_VERSION = '1.0',
    REQUEST_SOURCE = 'slack',
    ERROR_RESPONSE = 'Wow, this is embarrassing!  I understood what you were asking for but I simply can\'t but it into words.  Perhaps you could help me out by checking the logs and adding the missing template?';


module.exports = function SlackService(config) {
    
    /**
     * Responds to Slack using the exchange generated by Davis
     * @param {Object} davis - The fully proceeded Davis object.
     * @returns {Object} response - The response formatted how Slack expects.
     */
    function formatResponse(davis) {
        //ToDo Add support for cards.
        logger.info('Generating the response for Slack');
    
        let response = davis.exchange.response.show.text;
        
        return {
            version: RESPONSE_VERSION,
            sessionAttributes: {},
            response: {
                shouldEndSession: _.get(davis, 'exchange.response.finished', true),
                outputSpeech: {
                    type: 'text',
                    text: response
                }
            }
        };
    }

    return {
        /**
         * Interacts with Davis via Slack
         * @param {Object} req - The request received from Slack.
         * @returns {promise} res - The response formatted for Slack.
         */
        askDavis: (req) => {
            
            logger.info('Starting our interaction with Davis');
            
            return new BbPromise((resolve, reject) => {
                
                // Use Slack user property as id for Davis user 
                // Avoids having to enter Slack user property for each Davis user for assosciation
                let user = {
                    'id': 'slack-user-' + req.user, 
                    'nlp': config.users[0].nlp, 
                    'dynatrace': config.users[0].dynatrace, 
                    'timezone': config.users[0].timezone
                };
    
                // Starts or continues our conversation
                ConversationService.getConversation(user)
                .then(conversation => {
                    let davis = new Davis(user, conversation, config);
                    return davis.interact(req.text, REQUEST_SOURCE);
                })
                .then(davis => {
                    logger.info('Finished processing request');
                    return resolve(formatResponse(davis));
                })
                .catch(err => {
                    logger.error(`Unfortunately, something went wrong.  ${err.message}`);
                    //ToDo Add failure response
                    return reject(err.message);
                });
                
            });
            
        }
    }
};
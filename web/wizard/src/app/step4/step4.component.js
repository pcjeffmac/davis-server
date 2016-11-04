"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var wizard_service_1 = require('../wizard.service');
var Step4Component = (function () {
    function Step4Component(wizardService, router) {
        this.wizardService = wizardService;
        this.router = router;
        this.submitted = false;
        this.buttonText = 'Next';
    }
    Step4Component.prototype.validate = function () {
        if (this.wizardService.values.alexa.user) {
            this.buttonText = 'Next';
        }
        else {
            this.buttonText = 'Skip';
        }
    };
    Step4Component.prototype.doSubmit = function () {
        var _this = this;
        this.wizardService.connectAlexa()
            .then(function (result) {
            _this.router.navigate(['wizard/src/step5']);
        }, function (error) {
            console.log(error);
        });
        this.submitted = true;
    };
    Step4Component.prototype.ngOnInit = function () {
        if (!this.wizardService.values.user.name.first) {
            this.router.navigate(['wizard/src/step2']);
        }
        else if (!this.wizardService.values.dynatrace.url) {
            this.router.navigate(['wizard/src/step3']);
        }
    };
    Step4Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'step4',
            templateUrl: './step4.component.html',
            styleUrls: ['./step4.component.css']
        }), 
        __metadata('design:paramtypes', [wizard_service_1.WizardService, router_1.Router])
    ], Step4Component);
    return Step4Component;
}());
exports.Step4Component = Step4Component;
//# sourceMappingURL=step4.component.js.map
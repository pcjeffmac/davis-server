"use strict";var __decorate=this&&this.__decorate||function(e,i,s,t){var a,r=arguments.length,o=r<3?i:null===t?t=Object.getOwnPropertyDescriptor(i,s):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,s,t);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(r<3?a(o):r>3?a(i,s,o):a(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o},__metadata=this&&this.__metadata||function(e,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,i)},core_1=require("@angular/core"),config_service_1=require("../config.service"),davis_service_1=require("../../davis.service"),_=require("lodash"),ConfigUserComponent=function(){function e(e,i){this.iDavis=e,this.iConfig=i,this.submitted=!1,this.submitButton=this.iDavis.isWizard?"Continue":"Save",this.submitButtonDefault=this.iDavis.isWizard?"Continue":"Save",this.isPasswordFocused=!1,this.isPasswordMasked=!0,this.isSelectOpened=!1,this.isDirty=!1}return e.prototype.doSubmit=function(){var e=this;this.submitted=!0,this.submitButton="Saving...",this.user=this.iDavis.isWizard||this.isMyUser?this.iDavis.values.user:this.iDavis.values.otherUser,!this.iDavis.isWizard&&!this.isNewUser||!this.iDavis.isWizard&&this.isMyUser?this.iDavis.updateDavisUser(this.user).then(function(i){i.success?(e.iDavis.values.original.user=_.cloneDeep(e.user),e.isDirty=!1,e.iDavis.config.user.success=!0,e.submitButton="Save"):(e.submitButton="Save",e.iDavis.config.user.success=!1,e.iDavis.config.user.error=i.message)},function(i){e.submitButton="Save",e.iDavis.config.user.success=!1,e.iDavis.config.user.error="Sorry an error occurred, please try again."}):this.iDavis.addDavisUser(this.user).then(function(i){i.success?(e.submitButton=e.submitButtonDefault,e.iDavis.config.user.success=!0,e.iDavis.config.user.error=null,e.iDavis.values.otherUser={email:null,password:null,timezone:null,alexa_ids:null,name:{first:null,last:null},admin:!1},e.iDavis.values.otherUser.timezone=e.iDavis.getTimezone(),e.iDavis.values.original.otherUser=_.cloneDeep(e.iDavis.values.otherUser),e.iDavis.isWizard?(e.iDavis.values.original.user=_.cloneDeep(e.user),e.isDirty=!1,e.iDavis.removeDavisUser(e.iDavis.values.authenticate.email).then(function(i){i.success?(e.iDavis.config.user.success=!0,e.iDavis.values.authenticate.email=e.iDavis.values.user.email,e.iDavis.values.authenticate.password=e.iDavis.values.user.password,e.iDavis.getJwtToken().then(function(i){e.iDavis.token=i.token,e.iConfig.SelectView("dynatrace"),e.submitButton=e.submitButtonDefault,sessionStorage.setItem("email",e.iDavis.values.user.email),sessionStorage.setItem("token",i.token),sessionStorage.setItem("isAdmin",i.admin)},function(i){e.iDavis.config.user.success=!1,e.iDavis.config.user.error="Sorry an error occurred, please try again.",e.submitButton=e.submitButtonDefault})):(e.iDavis.config.user.success=!1,e.iDavis.config.user.error=i.message,e.submitButton=e.submitButtonDefault)},function(i){e.iDavis.config.user.success=!1,e.iDavis.config.user.error="Sorry an error occurred, please try again.",e.submitButton=e.submitButtonDefault})):e.iDavis.values.original.otherUser=_.cloneDeep(e.user)):(e.iDavis.config.user.success=!1,e.iDavis.config.user.error=i.message,e.iDavis.values.user.email="",e.iDavis.values.user.password="",e.submitButton=e.submitButtonDefault)},function(i){e.iDavis.config.user.success=!1,e.iDavis.config.user.error="Sorry an error occurred, please try again.",e.submitButton=e.submitButtonDefault})},e.prototype.validate=function(){this.isDirty=this.isMyUser?!_.isEqual(this.iDavis.values.user,this.iDavis.values.original.user):!_.isEqual(this.iDavis.values.otherUser,this.iDavis.values.original.otherUser)},e.prototype.onTimezoneChange=function(e){this.isMyUser?this.iDavis.values.user.timezone=e:this.iDavis.values.otherUser.timezone=e},e.prototype.ngOnInit=function(){var e=this;this.isNewUser&&(this.submitButtonDefault="Add User"),this.iDavis.getTimezones().then(function(i){e.iDavis.timezones=i.timezones,e.iDavis.isWizard?e.iDavis.values.user.timezone=e.iDavis.getTimezone():e.isNewUser&&(e.iDavis.values.otherUser.timezone=e.iDavis.getTimezone())},function(i){e.iDavis.config.user.success=!1,e.iDavis.config.user.error="Unable to get timezones, please try again later."}).catch(function(i){i.includes("invalid token")&&e.iDavis.logOut()}),setTimeout(function(){document.getElementsByName("first")[0]&&document.getElementsByName("first")[0].focus(),e.validate()},200)},e}();__decorate([core_1.Input(),__metadata("design:type",Boolean)],ConfigUserComponent.prototype,"isMyUser",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],ConfigUserComponent.prototype,"isNewUser",void 0),ConfigUserComponent=__decorate([core_1.Component({moduleId:module.id,selector:"config-user",templateUrl:"./config-user.component.html"}),__metadata("design:paramtypes",[davis_service_1.DavisService,config_service_1.ConfigService])],ConfigUserComponent),exports.ConfigUserComponent=ConfigUserComponent;
//# sourceMappingURL=../../../../maps/app/shared/config/config-user/config-user.component.js.map
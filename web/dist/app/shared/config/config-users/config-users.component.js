"use strict";var __decorate=this&&this.__decorate||function(e,s,t,i){var r,a=arguments.length,o=a<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,s,t,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(o=(a<3?r(o):a>3?r(s,t,o):r(s,t))||o);return a>3&&o&&Object.defineProperty(s,t,o),o},__metadata=this&&this.__metadata||function(e,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,s)},core_1=require("@angular/core"),router_1=require("@angular/router"),davis_service_1=require("../../davis.service"),_=require("lodash"),ConfigUsersComponent=function(){function e(e,s){this.iDavis=e,this.router=s,this.submitted=!1,this.submitButton="Save",this.isPasswordFocused=!1,this.isPasswordMasked=!0,this.addUser=!0,this.editUser=!1,this.users=[],this.backImg="/assets/img/back.svg",this.backImgHover="/assets/img/back-hover.svg",this.filterName=""}return e.prototype.addMode=function(){this.iDavis.values.otherUser={email:null,password:null,timezone:null,alexa_ids:null,name:{first:null,last:null},admin:!1},this.iDavis.values.otherUser.timezone=this.iDavis.getTimezone(),this.iDavis.values.original.otherUser=_.cloneDeep(this.iDavis.values.otherUser),this.filterName=""},e.prototype.editMode=function(e){this.editUser=!0,this.iDavis.values.original.otherUser=e,this.iDavis.values.otherUser=_.cloneDeep(e),this.filterName=""},e.prototype.getUsers=function(){var e=this;this.iDavis.getDavisUsers().then(function(s){e.iDavis.values.users=s.users,_.remove(e.iDavis.values.users,function(s){return s.email===e.iDavis.values.user.email}),e.iDavis.values.users.forEach(function(s,t){s.name?(s.name.first||(e.iDavis.values.users[t].name.first=""),s.name.last||(e.iDavis.values.users[t].name.last="")):e.iDavis.values.users[t].name={first:"",last:""}}),e.users=_.cloneDeep(s.users)},function(s){e.iDavis.config.users.success=!1,e.iDavis.config.users.error="Unable to get users, please try again later."}).catch(function(s){s.includes("invalid token")&&e.iDavis.logOut()})},e.prototype.updateFilter=function(e){this.filterName=e.value},e.prototype.ngOnInit=function(){this.getUsers()},e}();ConfigUsersComponent=__decorate([core_1.Component({moduleId:module.id,selector:"config-users",templateUrl:"./config-users.component.html"}),__metadata("design:paramtypes",[davis_service_1.DavisService,router_1.Router])],ConfigUsersComponent),exports.ConfigUsersComponent=ConfigUsersComponent;
//# sourceMappingURL=../../../../maps/app/shared/config/config-users/config-users.component.js.map
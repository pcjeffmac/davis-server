"use strict";var __decorate=this&&this.__decorate||function(e,r,o,t){var a,u=arguments.length,i=u<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,o,t);else for(var _=e.length-1;_>=0;_--)(a=e[_])&&(i=(u<3?a(i):u>3?a(r,o,i):a(r,o))||i);return u>3&&i&&Object.defineProperty(r,o,i),i},__metadata=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},core_1=require("@angular/core"),platform_browser_1=require("@angular/platform-browser"),forms_1=require("@angular/forms"),http_1=require("@angular/http"),router_1=require("@angular/router"),app_component_1=require("./app.component"),auth_module_1=require("./auth/auth.module"),configuration_module_1=require("./configuration/configuration.module"),wizard_module_1=require("./wizard/wizard.module"),app_routing_1=require("./app.routing"),config_guard_service_1=require("./auth/auth-guard/config-guard.service"),wizard_guard_service_1=require("./auth/auth-guard/wizard-guard.service"),davis_service_1=require("./shared/davis.service"),AppModule=function(){function e(){}return e}();AppModule=__decorate([core_1.NgModule({bootstrap:[app_component_1.AppComponent],declarations:[app_component_1.AppComponent],imports:[auth_module_1.AuthModule,app_routing_1.AppRouting,platform_browser_1.BrowserModule,configuration_module_1.ConfigurationModule,forms_1.FormsModule,http_1.HttpModule,http_1.JsonpModule,router_1.RouterModule,wizard_module_1.WizardModule],providers:[config_guard_service_1.ConfigGuard,wizard_guard_service_1.WizardGuard,davis_service_1.DavisService]}),__metadata("design:paramtypes",[])],AppModule),exports.AppModule=AppModule;
//# sourceMappingURL=../maps/app/app.module.js.map
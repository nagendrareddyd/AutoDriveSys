"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angularfire2_1 = require("angularfire2");
var app_routing_1 = require("./app.routing");
var users_module_1 = require("./users/users.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var error_component_1 = require("./error/error.component");
var api_keys_1 = require("./api.keys");
var dashboard_component_1 = require("./users/dashboard/dashboard.component");
var nav_bar_component_1 = require("./shared/nav-bar.component");
var auth_guard_service_1 = require("./services/auth-guard.service");
var login_service_1 = require("./services/login.service");
exports.firebaseConfig = {
    apiKey: api_keys_1.masterFirebaseConfig.apiKey,
    authDomain: api_keys_1.masterFirebaseConfig.authDomain,
    databaseURL: api_keys_1.masterFirebaseConfig.databaseURL,
    storageBucket: api_keys_1.masterFirebaseConfig.storageBucket,
    messagingSenderId: api_keys_1.masterFirebaseConfig.messagingSenderId
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            users_module_1.UserModule,
            app_routing_1.AppRoutingModule,
            angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig)
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            error_component_1.ErrorComponent,
            dashboard_component_1.DashboardComponent,
            nav_bar_component_1.NavBarComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            auth_guard_service_1.AuthGuard,
            login_service_1.LoginService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
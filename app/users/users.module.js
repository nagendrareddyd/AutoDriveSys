"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var users_component_1 = require("./users.component");
var user_menu_component_1 = require("../users/userMenu/user-menu.component");
var auth_guard_service_1 = require("../services/auth-guard.service");
var UserRoutes = [
    {
        path: 'user',
        component: users_component_1.UserComponent,
        children: [
            { path: '', component: user_menu_component_1.UserMenuComponent, canActivate: [auth_guard_service_1.AuthGuard] }
        ]
    },
];
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(UserRoutes)
        ],
        exports: [
            router_1.RouterModule
        ],
        declarations: [
            users_component_1.UserComponent,
            user_menu_component_1.UserMenuComponent
        ],
        providers: [
            auth_guard_service_1.AuthGuard
        ]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=users.module.js.map
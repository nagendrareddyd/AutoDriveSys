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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angularfire2_1 = require("angularfire2");
var LoginService = (function () {
    function LoginService(af) {
        this.af = af;
        this.userLoggedIn = false;
        console.log('user service');
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        console.log('login');
        this.af.auth.login({
            email: username,
            password: password
        }, {
            provider: angularfire2_1.AuthProviders.Password,
            method: angularfire2_1.AuthMethods.Password,
        }).catch(function (error) {
            alert(error + " Unable to login. Try again!");
        }).then(function (success) {
        });
        this.authUser = this.af.auth.subscribe(function (user) {
            if (user) {
                _this.authUser = user;
                console.log(_this.authUser);
                _this.userLoggedIn = true;
                _this.loggedInUser = user.auth.email;
                console.log(_this.loggedInUser);
            }
        });
    };
    LoginService.prototype.logout = function () {
        console.log('logout');
        this.af.auth.logout();
        this.loggedInUser = null;
        this.userLoggedIn = false;
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map
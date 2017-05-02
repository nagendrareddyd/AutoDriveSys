import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService  } from '../services/login.service'

@Component({
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css']
 })
export class LoginComponent {
    constructor(private loginsvc: LoginService, private router: Router ) { }
    email: string;
    password: string;

    login(){
        this.loginsvc.login(this.email, this.password); 
        if(this.loginsvc.userLoggedIn) {
            this.router.navigate(['/user']);
        }
    }

 }
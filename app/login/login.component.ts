import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService  } from '../services/user.service'

@Component({
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css']
 })
export class LoginComponent {
    constructor(private usersvc: UserService, private router: Router ) { }
    email: string;
    password: string;

    login(){
        this.usersvc.login(this.email, this.password); 
        if(this.usersvc.userLoggedIn) {
            this.router.navigate(['/dashboard']);
        }
    }

 }
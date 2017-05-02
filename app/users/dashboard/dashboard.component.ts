import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
    templateUrl: 'app/users/dashboard/dashboard.component.html'
})
export class DashboardComponent { 
    constructor(private userSvc: LoginService, private router: Router) { }

    
}
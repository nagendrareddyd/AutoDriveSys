import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
    templateUrl: 'app/dashboard/dashboard.component.html'
})
export class DashboardComponent { 
    constructor(private userSvc: UserService, private router: Router) { }

    logout(){
        this.userSvc.logout();
        this.router.navigate(['/login']);
    }
}
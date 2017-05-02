import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
    templateUrl: 'app/shared/nav-bar.component.html'
})
export class NavBarComponent {     
    username: string;
    activeSession: boolean;

    constructor( private loginSvc: LoginService, private router: Router ){ }
   
    logout(){
        this.loginSvc.logout();
        this.router.navigate(['/login']);
    }
}



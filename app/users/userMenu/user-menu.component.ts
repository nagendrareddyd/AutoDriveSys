import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
    templateUrl: 'app/users/userMenu/user-menu.component.html'
})
export class UserMenuComponent {     
    username: string;
    activeSession: boolean;

    constructor( private loginSvc: LoginService, private router: Router ){ }
   
    logout(){
        this.loginSvc.logout();
        this.router.navigate(['/login']);
    }
}


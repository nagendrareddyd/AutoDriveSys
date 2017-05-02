import { Injectable } from '@angular/core';
import { 
        CanActivate, 
        CanActivateChild,
        Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot
    } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild { 

    constructor(private router: Router, private loginSvc: LoginService) {
        console.log('Auth service');
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(this.loginSvc.userLoggedIn);
        if(this.loginSvc.userLoggedIn)
            return true;
        
        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(): boolean { 
        return true;
     }
}
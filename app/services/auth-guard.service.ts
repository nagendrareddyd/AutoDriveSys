import { Injectable } from '@angular/core';
import { 
        CanActivate, 
        CanActivateChild,
        Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot
    } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild { 

    constructor(private router: Router, private userSvc: UserService) {
        console.log('Auth service');
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(this.userSvc.userLoggedIn);
        if(this.userSvc.userLoggedIn)
            return true;
        
        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(): boolean { 
        return true;
     }
}
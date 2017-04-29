import { error } from 'util';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods  } from 'angularfire2'

@Injectable()
export class UserService { 
    userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser: any;

    constructor(private af: AngularFire) {
        console.log('user service');
     }
    
    login(username: string, password: string) {
        console.log('login');
        this.af.auth.login({
            email: username,
            password: password
        },
        {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
        }).catch(function(error){
             alert(`${error} Unable to login. Try again!`);
        }).then((success) => {
            
        })

        this.authUser = this.af.auth.subscribe((user) => {
            if(user) {
                this.authUser = user;
                console.log(this.authUser);
                this.userLoggedIn = true;
                this.loggedInUser = user.auth.email;
                console.log(this.loggedInUser);
            }
        });
    }

    logout() {
        console.log('logout');
        this.af.auth.logout();
        this.loggedInUser = null;
        this.userLoggedIn = false;
    }
}


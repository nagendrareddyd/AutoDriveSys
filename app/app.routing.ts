import { Component, NgModule } from '@angular/core';
import { CanActivate, RouterModule } from '@angular/router';

import { LoginComponent  } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { NavBarComponent } from './shared/nav-bar.component';

import { AuthGuard } from './services/auth-guard.service';

export var routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },    
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})
export class AppRoutingModule { }
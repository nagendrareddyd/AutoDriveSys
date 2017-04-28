import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent  } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './services/auth-guard.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', component: ErrorComponent }
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})
export class AppRoutingModule { }
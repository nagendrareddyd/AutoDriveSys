import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent  } from './login/login.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', component: ErrorComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './users.component';
import { UserMenuComponent } from '../users/userMenu/user-menu.component';
import { AuthGuard } from '../services/auth-guard.service'

const UserRoutes: Routes = [
    {
        path:'user',
        component:UserComponent,
        children:[            
            { path:'', component:UserMenuComponent, canActivate:[AuthGuard]}
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(UserRoutes)
    ],
    exports:[
        RouterModule
    ],
    declarations: [
        UserComponent,
        UserMenuComponent
    ],
    providers:[
        AuthGuard
    ]
})
export class UserModule { }
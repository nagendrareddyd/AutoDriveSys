import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app.routing';
import { UserModule } from './users/users.module';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { masterFirebaseConfig  } from './api.keys';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { NavBarComponent } from './shared/nav-bar.component';

import { AuthGuard } from './services/auth-guard.service';
import { LoginService } from './services/login.service'

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    BrowserModule,       
    UserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
    ],
  declarations: [ 
    AppComponent,
    LoginComponent,
    ErrorComponent,
    DashboardComponent,
    NavBarComponent
    ],
  bootstrap: [ AppComponent ],
  providers: [     
    AuthGuard,
    LoginService
    ]
})
export class AppModule { }

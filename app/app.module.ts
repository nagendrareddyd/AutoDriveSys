import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app.routing';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { masterFirebaseConfig  } from './api.keys';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service'

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
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
    ],
  declarations: [ 
    AppComponent,
    LoginComponent,
    ErrorComponent,
    DashboardComponent
    ],
  bootstrap: [ AppComponent ],
  providers: [     
    AuthGuard,
    UserService
    ]
})
export class AppModule { }

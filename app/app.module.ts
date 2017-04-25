import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [ 
    BrowserModule,    
    AppRoutingModule
    ],
  declarations: [ 
    AppComponent,
    LoginComponent,
    ErrorComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

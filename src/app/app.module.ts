import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AuthorizationModule } from "./Authorization/Authorization.module"
import { PersonModule } from './Layout/Person/person.module'
import { RegeistModule } from './Layout/Regeist/regeist.module'
import { ResetPasswordModule } from './Layout/ResetPassword/resetPassword.module'

import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthorizationModule,
    PersonModule,
    RegeistModule,
    ResetPasswordModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

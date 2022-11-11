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
import { MemberSendVerifyModule } from './Layout/MemberVerify/memberSendVerify.module'
import { ForgetPasswordModule } from './Layout/ForgetPassword/forgetPassword.module'
import { EndpointModule } from './Layout/Endpoint/endpoint.module'
import { AlertDialogModuel } from './Component/alertDialog/alertDialog.module'

import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

import { APIService } from './Lib/api.service'
import { AuthGuard } from './Lib/AuthGuard'
import { AuthService } from './Authorization/Authorization.service'

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
    MemberSendVerifyModule,
    ForgetPasswordModule,
    EndpointModule,
    AlertDialogModuel,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [APIService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

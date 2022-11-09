import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "../Authorization/Authorization.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private _auth : AuthService){
        this._auth.autoLogin()
    }
    canActivate(){
        if(!this._auth.isLoggedIn)
            window.alert("Sorry, you don't have permission to view this page")
        return this._auth.isLoggedIn
    }
}
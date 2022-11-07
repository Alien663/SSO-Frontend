import { Injectable } from '@angular/core';
import { APIService } from '../Lib/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    public isLoggedIn = false;

    constructor(private _http : APIService){}
    // store the URL so we can redirect after logging in
    redirectUrl: string | null = null;

    login(data: any){
        this._http.callAPI("Member/login", "POST", data)
        .subscribe(res => {
            this.isLoggedIn = true
            window.alert("Login Success")
        })
    }

    autoLogin(){
        this._http.callAPI("Member/login", "GET", {})
        .subscribe(res => {
            this.isLoggedIn = true
        })
    }

    logout(): void {
        this._http.callAPI("Member/logout", "POST")
        .subscribe( res => {
           this.isLoggedIn = false
           window.location.assign("/login");
        })
    }
}
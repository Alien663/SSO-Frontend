import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { AuthService } from "../Authorization/Authorization.service";
import { APIService } from "./api.service";
import { HttpClient } from "@angular/common/http"; 
import { map } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private http: HttpClient,
        private router: Router,
        private _http : APIService
    ) {}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
        return this.http.get(this._http.rootURL + "/Member/login", {
            observe: "response",
            responseType: "json",
            withCredentials: true,
            headers: {'Content-Type': 'application/json'}
        }).pipe(map( res => {
            if (res) {
                return true;
            }
            else{
                window.alert("Sorry, you don't have permission to view this page")
                window.location.assign("/")
                return false;
            }
        })
    )
    }
}


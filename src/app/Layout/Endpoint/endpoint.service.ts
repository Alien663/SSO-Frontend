import { Injectable } from "@angular/core";
import { APIService } from "src/app/Lib/api.service";

@Injectable()
export class EndpointService{
    constructor(
        private _http: APIService
    ){}

    LoginbyClient(){
        this._http.callAPI("client/login", "POST", {})
        .subscribe(res => {

        })
    }
}
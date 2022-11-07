import { Injectable } from "@angular/core";
import { ForgetPasswordModel } from './forgetPassword.model'
import { APIService } from '../../Lib/api.service'


@Injectable()
export class ForgetPasswordService{
    public mydata : ForgetPasswordModel = {
        EMail: "",
        Account: ""
    }
    public showLink = false
    public the_link = ""
    
    constructor(private _http : APIService){}

    submitForgetPassword(){
        this._http.callAPI("Member/password/forget", "POST", this.mydata)
        .subscribe( (res: any) => {
            console.log(res.result)
            this.showLink = true
            this.the_link = "/" + res.result
            window.alert("Apply renew password success, please check your email and go to the link to change your password")
        })
    }
}
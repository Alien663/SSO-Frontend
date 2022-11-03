import { Injectable } from '@angular/core'
import { APIService } from '../../Lib/api.service'
import { PasswordModel } from './resetPassword.model'
import { AuthService } from '../../Authorization/Authorization.service'

@Injectable()
export class ResetPassworedService{
    public mypassword : PasswordModel = {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    }

    constructor(private _http: APIService, private _auth : AuthService){}

    submitChange(){
        let validation = this.validatePassword()

        if(validation.result)
            this._http.callAPI("Member/password/renew", "POST", {
                OldPassword: this.mypassword.oldPassword,
                NewPassword: this.mypassword.newPassword
            }).subscribe( res => {
                window.alert("change password success, please login again")
                this._auth.logout()
            })
        else
            window.alert(validation.message)    
    }

    validatePassword(){
        if(this.mypassword.newPassword.length < 8)
            return({result: false, message : "Password is not long enough"})
        if(this.mypassword.newPassword !== this.mypassword.confirmNewPassword)
            return({result: false, message : "Confirm Password fail"})
        return {result:true, message: "Password is good"}
    }
}
import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { APIService } from 'src/app/Lib/api.service'
import { ResetPassworedService } from './resetPassword.service'
import { Password2Model } from './resetPassword.model'
@Component({
    selector: "app-reset-password",
    templateUrl: "./ResetPassword.html",
    styleUrls :["./ResetPassword.css"]
})

export class ResetPasswordLayout {
    constructor(protected _service : ResetPassworedService){}
}

@Component({
    selector: "app-reset-password",
    templateUrl: "./ResetPassword2.html",
    styleUrls :["./ResetPassword.css"]
})

export class ResetPasswordLayout2 {
    private token
    private uuid
    protected verifySuccess = false

    public mypassword : Password2Model={
        newPassword : "",
        confirmNewPassword: ""
    }
    constructor(
        private _http : APIService,
        private _router : ActivatedRoute
    ){
        this.token = this._router.snapshot.paramMap.get("token")
        this.uuid = this._router.snapshot.paramMap.get("uuid")
    }
    ngOnInit(){
        console.log({token: this.token, uuid : this.uuid})
        this._http.callAPI(`Member/password/renew/verify/${this.token}/${this.uuid}`, "GET", {})
        .subscribe(res => {
            this.verifySuccess = true
        })
    }

    submitChange(){
        let validation = this.validatePassword()
        if(validation.result)
            this._http.callAPI("Member/password/renew/forget", "POST", {
                Token: this.token,
                UUID: this.uuid,
                NewPassword: this.mypassword.newPassword
            }).subscribe( res => {
                window.alert("change password success, please login again")
                window.location.assign("/login")
            })
        else
            window.alert(validation.message)    
    }

    validatePassword(){
        if(this.mypassword.newPassword.length < 8)
             return({result: false, message : "Password is too short"})
         if(this.mypassword.newPassword !== this.mypassword.confirmNewPassword)
             return({result: false, message : "Confirm Password fail"})
         return {result:true, message: "Password is good"}
     }
}
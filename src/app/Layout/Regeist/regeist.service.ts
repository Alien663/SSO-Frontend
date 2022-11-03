import { Injectable } from '@angular/core'
import { APIService } from '../../Lib/api.service'
import { AccountModel } from './regeist.model'

@Injectable()
export class RegeistService{
    public applicationData : AccountModel = {
        account: "",
        password: "",
        confirmPassword: "",
        eMail: "",
        nickName: "",
    }

    constructor(private _http: APIService){}

    submitRegeist(){
        const validation = this.validatePassword()
        if(validation.result)
            this._http.callAPI("member/new", "PUT", this.applicationData).subscribe((res:any) => {
                window.alert("Regeist Successful, please login again")
                window.location.assign("/login")
            })
        else
            window.alert(validation.message)
    }

    validatePassword(){
        if(this.applicationData?.password.length < 8)
            return({result: false, message : "Password is not long enough"})
        if(this.applicationData?.password !== this.applicationData.confirmPassword)
            return({result: false, message : "Confirm Password fail"})
        return {result:true, message: "Password is good"}
    }
}
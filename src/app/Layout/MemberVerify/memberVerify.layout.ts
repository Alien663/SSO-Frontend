import { Component } from "@angular/core";
import { APIService } from '../../Lib/api.service'
import { ActivatedRoute } from "@angular/router";

@Component({
    template: `<h1>Account Verify {{success ? "Success": "Fail"}}</h1>`
})

export class MemberVerifyLayout{
    private token
    private uuid
    protected success = false
    constructor(
        private _http : APIService,
        private _router : ActivatedRoute    
    ){
        this.token = this._router.snapshot.paramMap.get("token")
        this.uuid = this._router.snapshot.paramMap.get("uuid")
    }
    ngOnInit(){
        console.log({ Toekn: this.token, UUID : this.uuid })
        this._http.callAPI("Member/verify", "POST", { UUID : this.uuid, Token: this.token })
        .subscribe((res:any) => {
            this.success = true
        })
    }
}
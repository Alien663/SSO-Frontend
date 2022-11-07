import { Component } from "@angular/core";
import { APIService } from '../../Lib/api.service'

@Component({
    template: `<div>
        <button (click)="SendVerify()">Send Verify Code To send verify EMail</button>
        <div *ngIf="showlink">
            <a href="{{verifyLink}}">Click me to active account</a>
        </div>
    </div>`
})

export class MemberSendVerifyLayout{
    protected showlink = false;
    protected verifyLink = ""
    constructor(private _http : APIService,){}
    SendVerify(){
        this._http.callAPI("Member/verify/send","GET", {})
        .subscribe((res: any) => {
            this.showlink = true
            this.verifyLink = "./" + res.result
        })
    }
}
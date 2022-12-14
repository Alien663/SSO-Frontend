import { Injectable } from '@angular/core'
import { PersonModel } from './person.model'
import { APIService }  from '../../Lib/api.service'

@Injectable()
export class PersonService{
    public mydata : PersonModel = {
        uuid : "",
        account : "",
        nickName : "",
        eMail : "",
        since : new Date,
        modifyDate : new Date,
    }
    constructor(private _http : APIService){}
    saveData(){
        this._http.callAPI("Member/me", "POST", this.mydata)
        .subscribe(res => {
            window.alert("Update Personal Data Success1")
        })
        window.location.reload()
    }
}
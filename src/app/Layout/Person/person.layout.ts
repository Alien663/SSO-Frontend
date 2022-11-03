import { Component, OnInit } from '@angular/core'
import { APIService } from '../../Lib/api.service'
import { PersonService } from './person.service'

@Component({
    selector: "app-person",
    templateUrl: "./person.html",
    styleUrls :["./person.css"]
})

export class PersonLayout implements OnInit {
    constructor (
        private myapi : APIService,
        protected _service : PersonService
    ){}
    ngOnInit(){
        this.myapi.callAPI("Member/me", "GET", {}).subscribe((res:any) => {
            this._service.mydata = res
        })
    }
    
    personaldata = {
        account: "",
        uuid: "",
        eMail: "",
        nickName: "",
        since: "",
        modifyDatetime: ""
    }

    saveData(){
        console.log(this.personaldata)
        this.myapi.callAPI("Member/me", "POST", this.personaldata).subscribe(res => {
            console.log(res)
        })
    }
}
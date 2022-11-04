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
        private _http : APIService,
        protected _service : PersonService
    ){}
    ngOnInit(){
        this._http.callAPI("Member", "GET", {})
        .subscribe((res:any) => {
            this._service.mydata = res
        })
    }
}
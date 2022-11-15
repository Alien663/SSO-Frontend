import { Injectable } from "@angular/core";
import { APIService } from "src/app/Lib/api.service";
import { MatDialog } from "@angular/material/dialog";
import { AlertComponent } from '../../Component/alertDialog/alertDialog.component'

@Injectable()
export class EndpointService{
    public account : string = ""
    public password : string = ""

    constructor(
        private _http: APIService,
        private _dialog: MatDialog
    ){}

    LoginbyEndpoint(){
        this._http.callAPI("Endpoint/login", "POST", {
            Account: this.account,
            Password: this.password
        })
        .subscribe(res => {
            console.log(res)
        })
    }

    LoginButton(){
        const dialog = this._dialog.open(AlertComponent, {
            width: '500px',
            data: "This Website will get your......",
            role: "alertdialog",
        })
        dialog.afterClosed().subscribe(result => {
            if(result){
                this.LoginbyEndpoint()
            }
        })
    }
}
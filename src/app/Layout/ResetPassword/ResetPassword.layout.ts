import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ResetPassworedService } from './resetPassword.service'

@Component({
    selector: "app-reset-password",
    templateUrl: "./ResetPassword.html",
    styleUrls :["./ResetPassword.css"]
})

export class ResetPasswordLayout {
    constructor(protected _service : ResetPassworedService){}
}
import { Component } from "@angular/core";
import { ForgetPasswordService } from './forgetPassword.service'

@Component({
    templateUrl: "./forgetPassword.html"
})
export class ForgetPasswordLayout   {
    constructor (public _service: ForgetPasswordService){}
}
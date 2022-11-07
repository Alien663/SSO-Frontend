import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ForgetPasswordLayout } from './forgetPassword.layout'
import { ForgetPasswordService } from './forgetPassword.service'
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ForgetPasswordLayout],
    imports:[
        CommonModule,
        FormsModule
    ],
    providers: [ForgetPasswordService]
})
export class ForgetPasswordModule{}
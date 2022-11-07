import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { MemberSendVerifyLayout } from './memberSendVerify.layout'
import { MemberVerifyLayout } from './memberVerify.layout'

@NgModule({
    declarations: [MemberSendVerifyLayout, MemberVerifyLayout],
    imports:[
        CommonModule
    ]
})
export class MemberSendVerifyModule{}
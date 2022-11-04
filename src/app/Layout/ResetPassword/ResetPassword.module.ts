import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ResetPasswordLayout } from './resetPassword.layout'
import { ResetPassworedService } from './resetPassword.service'

import { MatDividerModule } from "@angular/material/divider"
import { MatListModule } from "@angular/material/list"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[ResetPasswordLayout],
    imports:[
        CommonModule,
        MatDividerModule,
        MatListModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        FormsModule,
    ],
    providers: [ResetPassworedService]
})

export class ResetPasswordModule{}
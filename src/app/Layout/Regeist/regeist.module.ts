import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegeistLayout } from './regeist.layout'
import { RegeistService } from './regeist.service'

import { FormsModule } from '@angular/forms';
import { MatDividerModule } from "@angular/material/divider"
import { MatListModule } from "@angular/material/list"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"

@NgModule({
    declarations:[RegeistLayout],
    imports:[
        CommonModule,
        FormsModule,
        MatDividerModule,
        MatListModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
    ],
    providers: [RegeistService]
})

export class RegeistModule{}
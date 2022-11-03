import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PersonLayout } from './person.layout'
import { PersonService } from './person.service'

import { MatDividerModule } from "@angular/material/divider"
import { MatListModule } from "@angular/material/list"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"

@NgModule({
    declarations:[PersonLayout],
    imports:[
        CommonModule,
        MatDividerModule,
        MatListModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
    ],
    providers:[PersonService]
})

export class PersonModule{}
import { Component } from '@angular/core'
import { RegeistService } from './regeist.service'

@Component({
    selector: "app-regeist",
    templateUrl: "./regeist.html",
    styleUrls :["./regeist.css"]
})

export class RegeistLayout {
    constructor(protected _service : RegeistService){}
}
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { APIService } from 'src/app/Lib/api.service';
import { EndpointService } from './endpoint.service'

@Component({
  templateUrl: './endpoint.html',
  styleUrls: ['./endpoint.css']
})
export class EndpointLayout{
  private apikey
  protected showContent = false
  constructor(
    private _router : ActivatedRoute,
    private _http : APIService,
    public _service : EndpointService
  ){
    this.apikey = this._router.snapshot.paramMap.get("apikey")
  }

  ngOnInit(){
    this._http.callAPI("Endpoint", "POST", { APIKEY: this.apikey})
    .subscribe(res => {
      console.log(res)
      this.showContent = true
    })
  }
}
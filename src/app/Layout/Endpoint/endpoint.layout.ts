import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { APIService } from 'src/app/Lib/api.service';

@Component({
  templateUrl: './endpoint.html',
  styleUrls: ['./endpoint.css']
})
export class EndpointLayout{
  private apikey
  protected showContent = false
  constructor(
    private _router : ActivatedRoute,
    private _http : APIService
  ){
    this.apikey = this._router.snapshot.paramMap.get("apikey")
  }

  ngOnInit(){
    this._http.callAPI("client/verify", "POST",{ APIKEY: this.apikey})
    .subscribe(res => {
      this.showContent = true
    })
  }
}
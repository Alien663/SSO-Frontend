import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from "../Authorization.service"
import { APIService } from '../../Lib/api.service'

@Component({
  selector: 'app-loginUser',
  templateUrl: './loginUser.layout.html',
  styleUrls: ['./loginUser.layout.css']
})
export class loginUserLayout{
  client ?: {
    id : string,
    scope: string,
    redirecturl: string,
    state: string,
  };

  constructor(public authService: AuthService, private router: ActivatedRoute, private http : APIService) {}

  ngOnInit(){
    this.client = {
      id: this.router.snapshot.params["id"],
      scope: this.router.snapshot.params["scope"],
      redirecturl: this.router.snapshot.params["redirecturl"],
      state: this.router.snapshot.params["state"],
    }

    this.http.callAPI("client/verify", "POST", { ...this.client })
    .subscribe(res => {
      console.log(res)
    })

    if(this.authService.isLoggedIn){
      window.location.assign("/");
    }
    console.log(this.client)
  }

  submitLogin(f: NgForm) {
    this.authService.login(f.value)
  }
}
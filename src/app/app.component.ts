import { Component, isDevMode } from '@angular/core';
import { AuthService } from './Authorization/Authorization.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  protected isdev = isDevMode()

  constructor(public _auth: AuthService){}

  ngOnInit(){
    if(!this._auth.isLoggedIn)
      this._auth.autoLogin()
  }

  Logout(){
    this._auth.logout()
  }
}

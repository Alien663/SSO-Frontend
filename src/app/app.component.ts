import { Component, isDevMode } from '@angular/core';
import { AuthService } from './Authorization/Authorization.service'
import { AlertComponent } from './Component/alertDialog/alertDialog.component'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  protected isdev = isDevMode()

  constructor(
    public _auth: AuthService,
    private _dialog : MatDialog
  ){}

  ngOnInit(){
    if(!this._auth.isLoggedIn)
      this._auth.autoLogin()
  }

  Logout(){
      const _dia = this._dialog.open(AlertComponent, {
          width: '500px',
          data: "Are you sure about that?",
          role: "alertdialog",
      })
      _dia.afterClosed().subscribe(result => {
          if(result){
              this._auth.logout()
          }
      })
    }
}

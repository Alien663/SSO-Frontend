import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component'
import { HomeComponent} from './Component/home/home.component'

import { loginUserLayout } from './Authorization/Login/loginUser.layout'
import { PersonLayout } from './Layout/Person/person.layout'
import { RegeistLayout } from './Layout/Regeist/regeist.layout'
import { ResetPasswordLayout } from './Layout/ResetPassword/resetPassword.layout'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: loginUserLayout},
  { path: "regeist", component: RegeistLayout},
  { path: "member/information", component:PersonLayout},
  { path: "member/resetpassword", component:ResetPasswordLayout},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

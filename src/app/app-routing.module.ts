import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component'
import { HomeComponent} from './Component/home/home.component'

import { loginUserLayout } from './Authorization/Login/loginUser.layout'
import { PersonalInformationLayout } from './Layout/PersonalInformation/personalInformation.layout'
import { RegeistLayout } from './Layout/Regeist/regeist.layout'
import { ResetPasswordLayout } from './Layout/ResetPassword/ResetPassword.layout'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: loginUserLayout},
  { path: "login/:id", component: loginUserLayout},
  { path: "regeist", component: RegeistLayout},
  { path: "member/information", component:PersonalInformationLayout},
  { path: "member/resetpassword", component:ResetPasswordLayout},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component'
import { HomeComponent} from './Component/home/home.component'

import { loginUserLayout } from './Authorization/Login/loginUser.layout'
import { PersonLayout } from './Layout/Person/person.layout'
import { RegeistLayout } from './Layout/Regeist/regeist.layout'
import { ResetPasswordLayout, ResetPasswordLayout2 } from './Layout/ResetPassword/resetPassword.layout'
import { MemberVerifyLayout } from './Layout/MemberVerify/memberVerify.layout'
import { MemberSendVerifyLayout } from './Layout/MemberVerify/memberSendVerify.layout'
import { ForgetPasswordLayout } from './Layout/ForgetPassword/forgetPassword.layout'
import { AuthGuard } from './Lib/AuthGuard'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: loginUserLayout},
  { path: "regeist", component: RegeistLayout},
  { path: "member/information", component:PersonLayout, canActivate: [AuthGuard]},
  { path: "member/resetpassword", component:ResetPasswordLayout, canActivate: [AuthGuard]},
  { path: "member/resetpassword/:token/:uuid", component:ResetPasswordLayout2},
  { path: "member/verify/:token/:uuid", component : MemberVerifyLayout},
  { path: "member/verify/send", component: MemberSendVerifyLayout},
  { path: "member/forgetpassword", component: ForgetPasswordLayout},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from 'src/app/core/guard/auth-guard';
import {ChangePasswordComponent} from "./change-password/change-password.component";

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  {
    path: 'my-profile', canActivate:[AuthGuard],loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule),
  },
  {
    path: 'change-password/:token',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }

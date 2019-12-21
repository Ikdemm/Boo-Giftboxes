import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { PasswordResetComponent } from './page/password-reset/password-reset.component';
import { ProfileComponent } from './page/profile/profile.component';
import { AuthGuard } from 'src/app/core/guard/auth-guard';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'my-profile', canActivate:[AuthGuard],loadChildren: () => import('./page/profile/profile.module').then(module => module.ProfileModule), }
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
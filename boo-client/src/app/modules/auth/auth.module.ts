import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { PasswordResetComponent } from './page/password-reset/password-reset.component';
import { RegisterComponent } from './page/register/register.component';

import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, PasswordResetComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }

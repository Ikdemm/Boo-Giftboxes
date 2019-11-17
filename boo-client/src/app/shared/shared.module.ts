import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [BackToTopComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BackToTopComponent,
    NavbarComponent
  ]
})
export class SharedModule { }

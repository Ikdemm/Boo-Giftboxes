import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [BackToTopComponent, NavbarComponent, ConfirmModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    /*  Angular Material modules*/
    MatDialogModule
  ],
  exports: [
    BackToTopComponent,
    NavbarComponent
  ],
  entryComponents:[
    ConfirmModalComponent
  ]
})
export class SharedModule { }

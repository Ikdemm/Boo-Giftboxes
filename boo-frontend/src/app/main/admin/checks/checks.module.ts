import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChecksListComponent } from './checks-list/checks-list.component';
import {
  MatButtonModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatDialogModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from "@angular/material";
import { FuseConfirmDialogModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedModule } from 'app/shared/shared.module';
const routes = [
  {
    path: '',
    component: ChecksListComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]
@NgModule({
  declarations: [ ChecksListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
   
    FuseConfirmDialogModule,
    FuseSharedModule,
    SharedModule
  ]
})
export class ChecksModule { }

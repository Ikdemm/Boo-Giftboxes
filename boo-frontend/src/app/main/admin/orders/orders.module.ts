import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
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
import { SharedModule } from 'app/shared/shared.module';
import { FuseWidgetModule, FuseConfirmDialogModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
const routes = [
  {
    path: '',
    component: OrdersListComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]
@NgModule({
  declarations: [ OrdersListComponent],
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
    FuseWidgetModule,
    SharedModule
  ]
})
export class OrdersModule { }

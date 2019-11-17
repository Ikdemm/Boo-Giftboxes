import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
import { BoxesListComponent } from './boxes-list/boxes-list.component';
import { BoxesAddComponent } from './boxes-add/boxes-add.component';
const routes = [
  {
    path: '',
    component: BoxesListComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]
@NgModule({
  declarations: [ BoxesListComponent, BoxesAddComponent],
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
  ],
  entryComponents:[BoxesAddComponent],
  providers:[
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
          hasBackdrop: true,
          //panelClass: "'event-form-dialog'",
          height: "auto",
          width: "900px"
      }
  }
  ]
})
export class BoxesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { FuseConfirmDialogModule, FuseHighlightModule } from '@fuse/components';
import { SharedModule } from 'app/shared/shared.module';
import { MatListModule, MatMenuModule} from '@angular/material';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    FuseSharedModule,
    FuseWidgetModule,
    FuseConfirmDialogModule,
    FuseHighlightModule,
    SharedModule,
    MatListModule,
    MatMenuModule
  ],
  entryComponents: [ProfileComponent]
})
export class ProfileModule { }

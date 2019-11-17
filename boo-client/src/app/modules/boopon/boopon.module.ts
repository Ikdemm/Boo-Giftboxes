import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BooponRoutingModule } from './boopon-routing.module';
import { BooponComponent } from './page/boopon/boopon.component';

import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [BooponComponent],
  imports: [
    CommonModule,
    SharedModule,
    BooponRoutingModule,
    RouterModule
  ]
})
export class BooponModule { }

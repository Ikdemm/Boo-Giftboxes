import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstStepComponent } from './page/first-step/first-step.component';
import { SecondStepComponent } from './page/second-step/second-step.component';
import { ThirdStepComponent } from './page/third-step/third-step.component';
import { SharedModule } from '../../shared/shared.module';
import { BasketRoutingModule } from './basket.routing';


@NgModule({
  declarations: [FirstStepComponent, SecondStepComponent, ThirdStepComponent],
  imports: [
    CommonModule,
    SharedModule,
    BasketRoutingModule,
    RouterModule
  ]
})
export class BasketModule { }

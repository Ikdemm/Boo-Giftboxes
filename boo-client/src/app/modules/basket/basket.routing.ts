import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstStepComponent } from './page/first-step/first-step.component';
import { SecondStepComponent } from './page/second-step/second-step.component';
import { ThirdStepComponent } from './page/third-step/third-step.component';


export const BasketRoutes: Routes = [
    {
      path: 'basket',
      component: FirstStepComponent
    },
    {
      path: 'second-step',
      component: SecondStepComponent
    },
    {
      path: 'third-step',
      component: ThirdStepComponent
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(BasketRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BasketRoutingModule { }
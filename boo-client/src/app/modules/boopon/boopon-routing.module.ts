import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooponComponent } from './page/boopon/boopon.component'; 


const booponRoutes: Routes = [
  { path: 'boopon', component: BooponComponent }
];

@NgModule({
  imports: [RouterModule.forChild(booponRoutes)],
  exports: [RouterModule]
})
export class BooponRoutingModule { }

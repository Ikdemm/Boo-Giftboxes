import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooponComponent } from './boopon/boopon.component';


const booponRoutes: Routes = [
  { path: '', component: BooponComponent },
];

@NgModule({
  imports: [RouterModule.forChild(booponRoutes)],
  exports: [RouterModule]
})
export class BooponRoutingModule { }

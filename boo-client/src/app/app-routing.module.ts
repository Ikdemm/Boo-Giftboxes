import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [

  {
    path:'',
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule),
  }
  /*{
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'boopon',
    loadChildren: () => import('./modules/boopon/boopon.module').then(mod => mod.BooponModule),
  },
  {
    path: 'basket',
    loadChildren: () => import('./modules/basket/basket.module').then(mod => mod.BasketModule),
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

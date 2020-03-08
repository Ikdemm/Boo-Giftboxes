import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout.component";


const routes: Routes = [
    {
        path:  '',
        component: LayoutComponent,
        children : [
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {
                path: 'home',
                loadChildren: () => import('../modules/home/home.module').then(mod => mod.HomeModule),
            },
            {
                path: 'auth',
                loadChildren: () => import('../modules/auth/auth.module').then(mod => mod.AuthModule),
            },
            {
                path: 'boopon',
                loadChildren: () => import('../modules/boopon/boopon.module').then(mod => mod.BooponModule),
            },
            {
                path: 'basket',
                loadChildren: () => import('../modules/basket/basket.module').then(mod => mod.BasketModule),
            },
        ]
    },
    {path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

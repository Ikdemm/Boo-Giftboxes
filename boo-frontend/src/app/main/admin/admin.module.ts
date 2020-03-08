import {NgModule} from '@angular/core';
import {FuseSharedModule} from '@fuse/shared.module';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path: 'categories',
        loadChildren: './categories/categories.module#CategoriesModule'
    },
    {
        path: 'boxes',
        loadChildren: './boxes/boxes.module#BoxesModule'
    },
    {
        path: 'checks',
        loadChildren: './checks/checks.module#ChecksModule'
    },
    {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: '**',
        redirectTo: 'orders'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), FuseSharedModule]
})
export class AdminModule {
}

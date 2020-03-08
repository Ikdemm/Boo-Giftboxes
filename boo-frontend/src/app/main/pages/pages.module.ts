import {NgModule} from '@angular/core';
import {FuseSharedModule} from '@fuse/shared.module';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule
    ]
})
export class PagesModule {
}

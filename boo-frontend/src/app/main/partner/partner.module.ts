import {NgModule} from '@angular/core';
import {FuseSharedModule} from '@fuse/shared.module';
import {RouterModule} from '@angular/router';

const routes = [

    {
        path: 'check',
        loadChildren: './check/check.module#CheckModule'
    },
    {
        path: '**',
        redirectTo: 'check'
    }
];

@NgModule({
    declarations: [],
    imports: [
        [RouterModule.forChild(routes), FuseSharedModule]
    ]
})
export class PartnerModule {
}

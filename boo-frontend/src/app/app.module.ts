import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule} from '@fuse/components';

import {fuseConfig} from 'app/fuse-config';

import {AppComponent} from 'app/app.component';
import {LayoutModule} from 'app/layout/layout.module';
import {CoreModule} from './core/core.module';
import {AuthGuard} from './core/_guards/auth-guard';
import { DatePipe } from '@angular/common';

const appRoutes: Routes = [

    {
        path: 'admin',
        loadChildren: './main/admin/admin.module#AdminModule',
        data: {role: 'ROLE_ADMIN'},
        canActivate: [AuthGuard]
    },
    {
        path: 'partner',
        loadChildren: './main/partner/partner.module#PartnerModule',
        data: {role: 'ROLE_PARTNER'},
        canActivate: [AuthGuard]
    },
    {
        path: 'auth',
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),


        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        //Core Modules
        CoreModule,
        // App modules
        LayoutModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers:[
        DatePipe
    ]
})
export class AppModule {
}

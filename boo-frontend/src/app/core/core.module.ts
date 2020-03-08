import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PartnersService} from './_services/partners.service';
import {OrdersService} from './_services/orders.service';
import {ChecksService} from './_services/checks.service';
import {HttpApiInterceptor} from './_interceptors/httpapi.interceptors';
import {AuthenticationService} from './_services/authentication.service';
import {LayoutUtilsService} from './_utils/layout-utils.service';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material';
import {CategoriesService} from './_services/categories.service';
import {SafeHtmlPipe} from './_pipes/safe-html.pipe';

@NgModule({
    declarations: [SafeHtmlPipe],
    imports: [
        CommonModule,
        HttpClientModule,
        MatSnackBarModule
    ],
    providers: [
        //  BoxesService,
        PartnersService,
        OrdersService,
        ChecksService,
        AuthenticationService,
        LayoutUtilsService,
        CategoriesService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpApiInterceptor,
            multi: true
        },
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: {
                duration: 2000,
                verticalPosition: 'bottom'
            }
        }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}

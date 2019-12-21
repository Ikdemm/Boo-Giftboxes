import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxService } from './services/box.service';
import { CategoryService } from './services/category.service';
import { EmailService } from './services/email.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{RequestHttpInterceptor} from './helpers/request-http.interceptor'
import { CartService } from './services/cart.service';
import { AuthenticationService } from './services/authentication.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './guard/auth-guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers:[
    BoxService,
    CategoryService,
    EmailService,
    CartService,
    AuthenticationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestHttpInterceptor,
      multi: true
    },
  ]
})
export class CoreModule { 
  constructor (@Optional() @SkipSelf() parentModule: CoreModule){
    if (parentModule) {
      throw new Error("You should import core module only in the root module")
  }
  }
}

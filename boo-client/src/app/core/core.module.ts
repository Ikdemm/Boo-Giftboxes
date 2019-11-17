import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxService } from './services/box.service';
import { CategoryService } from './services/category.service';
import { EmailService } from './services/email.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{RequestHttpInterceptor} from './helpers/request-http.interceptor'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    BoxService,
    CategoryService,
    EmailService,
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

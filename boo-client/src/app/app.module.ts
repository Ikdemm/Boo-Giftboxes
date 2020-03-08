import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from './modules/home/home.module';
import { AuthModule } from './modules/auth/auth.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { BooponModule } from './modules/boopon/boopon.module';
import { BasketModule } from './modules/basket/basket.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OwlModule } from 'ngx-owl-carousel';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    OwlModule,
    CoreModule,
    SharedModule
  ],
  declarations: [AppComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

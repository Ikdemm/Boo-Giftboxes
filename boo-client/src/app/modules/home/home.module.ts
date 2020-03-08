import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
import { BooboxDetailsComponent } from './boobox-details/boobox-details.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BooboxCatalogComponent } from './boobox-catalog/boobox-catalog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BooboxListComponent } from './boobox-list/boobox-list.component';

import { OwlModule } from 'ngx-owl-carousel';
import { BecomePartnerComponent } from './become-partner/become-partner.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, GuideComponent, BooboxDetailsComponent, BooboxCatalogComponent, BooboxListComponent, BecomePartnerComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HomeRoutingModule,
    PdfViewerModule,
    MatDialogModule,
    OwlModule,
    FormsModule
  ],
  entryComponents: [BooboxCatalogComponent]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
import { BooboxDetailsComponent } from './boobox-details/boobox-details.component';
import { BooboxCatalogComponent } from './boobox-catalog/boobox-catalog.component';
import { BooboxListComponent } from './boobox-list/boobox-list.component';
import { BecomePartnerComponent } from './become-partner/become-partner.component';

const homeRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'boobox-details/:id', component: BooboxDetailsComponent},
  { path: 'catalog', component: BooboxCatalogComponent},
  { path: 'boobox-list', component: BooboxListComponent},
  { path: 'bookeur', component: BecomePartnerComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }

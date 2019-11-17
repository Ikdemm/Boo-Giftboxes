import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { GuideComponent } from './page/guide/guide.component';
import { BooboxDetailsComponent } from './page/boobox-details/boobox-details.component';
import { BooboxCatalogComponent } from './page/boobox-catalog/boobox-catalog.component';
import { BooboxListComponent } from './page/boobox-list/boobox-list.component'; 
import { BecomePartnerComponent } from './page/become-partner/become-partner.component';

const homeRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'boobox-details/:id', component: BooboxDetailsComponent},
  { path: 'catalog', component: BooboxCatalogComponent},
  { path: 'boobox-list', component: BooboxListComponent},
  { path: 'bookeur', component: BecomePartnerComponent}
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
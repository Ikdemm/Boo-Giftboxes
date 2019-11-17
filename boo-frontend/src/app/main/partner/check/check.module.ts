import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChecksListComponent } from './checks-list/checks-list.component';
const routes = [
  {
    path: 'checks',
    component: ChecksListComponent
  },
  {
    path: '**',
    redirectTo: 'checks'
  }
]
@NgModule({
  declarations: [ ChecksListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class CheckModule { }

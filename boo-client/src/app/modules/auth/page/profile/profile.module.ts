import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routing';
import { ProfileComponent } from './profile.component';
import { ChequeDetailsComponent } from './cheque-details/cheque-details.component';
import { CommandeDetailsComponent } from './commande-details/commande-details.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { MatTableModule } from '@angular/material'  


@NgModule({
  declarations: [ProfileComponent, ChequeDetailsComponent, CommandeDetailsComponent, ProfileDetailsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class ProfileModule { }

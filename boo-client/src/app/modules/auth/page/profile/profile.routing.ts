import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { CommandeDetailsComponent } from './commande-details/commande-details.component';
import { ChequeDetailsComponent } from './cheque-details/cheque-details.component';
import { ProfileComponent } from './profile.component';


const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children:[
            {
                path: '',
                component: ProfileDetailsComponent
            },
            {
                path: 'commandes',
                component: CommandeDetailsComponent
            },
            {
                path: 'cheques',
                component: ChequeDetailsComponent
            },
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ChecksListComponent} from './checks-list/checks-list.component';
import {SharedModule} from 'app/shared/shared.module';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
} from '@angular/material';
import {FuseConfirmDialogModule} from '@fuse/components';
import {FuseSharedModule} from '@fuse/shared.module';
import {CheckVerifComponent} from './check-verif/check-verif.component';

const routes = [
    {
        path: 'checks',
        component: ChecksListComponent
    },
    {
        path: '**',
        redirectTo: 'checks'
    }
];

@NgModule({
    declarations: [ChecksListComponent, CheckVerifComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatDialogModule,
        MatTabsModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatButtonToggleModule,

        FuseConfirmDialogModule,
        FuseSharedModule,
        SharedModule

    ],
    entryComponents: [CheckVerifComponent]
})
export class CheckModule {
}

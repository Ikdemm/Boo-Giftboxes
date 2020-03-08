import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {OrdersListComponent} from './orders-list/orders-list.component';
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
    MatToolbarModule
} from '@angular/material';
import {SharedModule} from 'app/shared/shared.module';
import {FuseConfirmDialogModule, FuseWidgetModule} from '@fuse/components';
import {FuseSharedModule} from '@fuse/shared.module';
import {OrderModalComponent} from './orders-list/order-modal/order-modal.component';

const routes = [
    {
        path: '',
        component: OrdersListComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [OrdersListComponent, OrderModalComponent],
    imports: [
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
        FuseWidgetModule,
        SharedModule
    ], entryComponents: [
        OrderModalComponent
    ]
})
export class OrdersModule {
}

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    MAT_DIALOG_DEFAULT_OPTIONS,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
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
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AgmCoreModule} from '@agm/core';

import {FuseSharedModule} from '@fuse/shared.module';
import {FuseWidgetModule} from '@fuse/components/widget/widget.module';
import {CommonModule} from '@angular/common';
import {PartnersListComponent} from './partners/partners-list/partners-list.component';
import {PartnersAddComponent} from './partners/partners-add/partners-add.component';
import {PartnersEditComponent} from './partners/partners-edit/partners-edit.component';
import {CategoriesAddComponent} from './categories-add/categories-add.component';
import {CategoriesEditComponent} from './categories-edit/categories-edit.component';
import {FuseConfirmDialogModule, FuseHighlightModule} from '@fuse/components';
import {SharedModule} from 'app/shared/shared.module';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {CategoriesRoutingModule} from './categories-routing.module';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [PartnersListComponent, PartnersAddComponent, PartnersEditComponent, CategoriesListComponent, CategoriesAddComponent, CategoriesEditComponent],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
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
        MatListModule,
        MatMenuModule,

        FuseHighlightModule,
        FuseWidgetModule,
        AgmCoreModule,
        NgxChartsModule,
        RouterModule,

        FuseConfirmDialogModule,
        FuseSharedModule,
        SharedModule,
        //BrowserAnimationsModule
    ],
    entryComponents: [
        PartnersAddComponent,
        PartnersEditComponent,
        CategoriesAddComponent,
        CategoriesEditComponent
    ],
    providers: [
        {
            provide: MAT_DIALOG_DEFAULT_OPTIONS,
            useValue: {
                hasBackdrop: true,
                //panelClass: "'event-form-dialog'",
                height: 'auto',
                width: '900px'
            }
        }
    ]
})
export class CategoriesModule {
}

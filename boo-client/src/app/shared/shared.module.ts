import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackToTopComponent} from './components/back-to-top/back-to-top.component';
import {ConfirmModalComponent} from './modals/confirm-modal/confirm-modal.component';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [BackToTopComponent, ConfirmModalComponent],
    imports: [
        CommonModule,
        RouterModule,
        /*  Angular Material modules*/
        MatDialogModule,
        ReactiveFormsModule
    ],
    exports: [
        BackToTopComponent
    ],
    entryComponents: [
        ConfirmModalComponent
    ]
})
export class SharedModule {
}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {fuseAnimations} from '@fuse/animations';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriesListComponent} from '../../../categories/categories-list/categories-list.component';
import {DatePipe} from '@angular/common';

//import { Order } from 'app/main/apps/e-commerce/order/order.model';

@Component({
    selector: 'app-order-modal',
    templateUrl: './order-modal.component.html',
    styleUrls: ['./order-modal.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class OrderModalComponent implements OnInit {
    order: any;
    orderForm: FormGroup;

    constructor(
        private _matDialog: MatDialog,
        private _formBuilder: FormBuilder,
        public matDialogRef: MatDialogRef<any>,
        private datePipe: DatePipe
    ) {
    }

    ngOnInit() {
        console.log(this.order);
        this.initOrderForm();
    }
    initOrderForm() {
        this.orderForm = this._formBuilder.group({
            name: new FormControl({value: this.order.user.name, disabled: true}, Validators.required),
            email: new FormControl({value: this.order.user.email, disabled: true}, Validators.required),
            date: new FormControl({value: this.datePipe.transform(new Date(this.order.date),'medium'), disabled: true}, Validators.required),
            totalPrice: new FormControl({value: this.order.prix_totale, disabled: true}, Validators.required),
            phone: new FormControl({value: this.order.user.phone, disabled: true}, Validators.required),
            adresse: new FormControl({value: this.order.user.address, disabled: true}, Validators.required),

        });
    }

    close() {
        this.matDialogRef.close();
    }
}

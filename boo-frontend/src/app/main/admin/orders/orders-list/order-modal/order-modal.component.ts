import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
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

  constructor(
    private _matDialog: MatDialog,
  ) { }

  ngOnInit() {
    console.log(this.order)
  }

}

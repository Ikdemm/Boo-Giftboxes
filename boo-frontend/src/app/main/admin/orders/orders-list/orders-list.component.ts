import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { OrdersService } from 'app/core/_services/orders.service';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { OrderModalComponent } from './order-modal/order-modal.component';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class OrdersListComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild("sort") sort: MatSort;
  displayedColumns = [
    "number",
    "customer",
    "date",
    "totalPrice",
    "status",
    "actions"
  ];
  hasItems = false;
  loading = true;
  status;
  constructor(private orderService:OrdersService,private _matDialog: MatDialog) { }

  ngOnInit() {
    this.getListOrder();
  }
  getListOrder(){
    this.orderService.findAll().subscribe(data=>{
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data);
        if (this.dataSource.data.length == 0) this.hasItems = true;
        this.dataSource.paginator = this.paginator;
        this.loading = false;
    },error=>{
      console.log(error);
      this.hasItems = true;
      this.loading = false;
    })
  }
  detailOrder(order){
    console.log(order);
    console.log("ADD NEW CATEGORIE");
    let dialogRef = this._matDialog.open(OrderModalComponent, {
      panelClass: "mail-compose-dialog",
      width:"900px"
    });
    dialogRef.componentInstance.order = order
    dialogRef.afterClosed().subscribe(response => {
      if (!response) {
        return;
      }
    });

  }

}

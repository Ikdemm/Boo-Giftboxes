import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { OrdersService } from 'app/core/_services/orders.service';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

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
    "deliveryAddress",
    "totalPrice",
    "status",
    "actions"
  ];
  hasItems = false;
  loading = true;
  status;
  constructor(private orderService:OrdersService) { }

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

}

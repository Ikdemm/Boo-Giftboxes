import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { OrdersService } from 'app/core/_services/orders.service';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ChecksService } from 'app/core/_services/checks.service';

@Component({
  selector: 'app-checks-list',
  templateUrl: './checks-list.component.html',
  styleUrls: ['./checks-list.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class ChecksListComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild("sort") sort: MatSort;
  displayedColumns = [
    "number",
    "date",
    "email",
    "status",
    "partner",
    "box",
    "actions",
  ];
  hasItems = false;
  loading = true;
  constructor(private chekService:ChecksService) { }

  ngOnInit() {
    this.getListCheck();
  }
  getListCheck(){
    this.chekService.findAll().subscribe(data=>{
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

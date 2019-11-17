import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog} from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { BoxesService } from 'app/core/_services/boxes.service';
import { BoxesAddComponent } from '../boxes-add/boxes-add.component';

@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrls: ['./boxes-list.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class BoxesListComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild("sort") sort: MatSort;
  displayedColumns = [
    "image",
    "name",
    "description",
    "partners",
    "priceClient",
    "pricePartner",
    "catalog",
    "actions"
  ];
  hasItems = false;
  loading = true;
  constructor(private boxService:BoxesService,	private _matDialog: MatDialog) { }

  ngOnInit() {
    this.getListBox();
  }
  getListBox(){
    this.boxService.findAll().subscribe(data=>{
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
  addNewBox(){
    console.log("ADD NEW BOX")
    let dialogRef = this._matDialog.open(BoxesAddComponent, {
			panelClass: "mail-compose-dialog"
    });
    dialogRef.afterClosed().subscribe(response=>{
      if (!response) {
        return;
      }
      this.getListBox()
    })
  }

}

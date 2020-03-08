import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ChecksService} from 'app/core/_services/checks.service';
import {CheckVerifComponent} from '../check-verif/check-verif.component';

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
    @ViewChild('sort') sort: MatSort;
    displayedColumns = [
        'number',
        'date',
        'email',
        'status',
        'box',
        'actions',
    ];
    hasItems = false;
    loading = true;

    constructor(private chekService: ChecksService, private _matDialog: MatDialog) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.getListCheck();
        }, 1000);
    }

    getListCheck() {
        this.chekService.findAllByPartner().subscribe(data => {
            console.log(data);
            this.dataSource = new MatTableDataSource<any>(data);
            if (this.dataSource.data.length == 0) {
                this.hasItems = true;
                this.loading = false;

            } else {
                this.loading = false;
                this.hasItems = false;
            }
            this.dataSource.paginator = this.paginator;
        }, error => {
            console.log(error);
            this.hasItems = true;
            this.loading = false;
        });
    }

    verfierCheque() {
        console.log('ADD NEW CATEGORIE');
        let dialogRef = this._matDialog.open(CheckVerifComponent, {
            panelClass: 'mail-compose-dialog'
        });
        dialogRef.afterClosed().subscribe(response => {
            console.log(response);
            if (response) {
                this.getListCheck();

            }
        });
    }
}

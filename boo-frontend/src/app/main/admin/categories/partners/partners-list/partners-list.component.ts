import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {PartnersService} from 'app/core/_services/partners.service';
import {fuseAnimations} from '@fuse/animations';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PartnersAddComponent} from '../partners-add/partners-add.component';
import {CategoriesService} from 'app/core/_services/categories.service';
import {ActivatedRoute} from '@angular/router';
import {Categorie} from 'app/shared/models/categorie.model';
import {Partner} from 'app/shared/models/partner.model';
import {LayoutUtilsService, MessageType} from 'app/core/_utils/layout-utils.service';

@Component({
    selector: 'app-partners-list',
    templateUrl: './partners-list.component.html',
    styleUrls: ['./partners-list.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class PartnersListComponent implements OnInit {
    dataSource;
    category: Categorie;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('sort') sort: MatSort;
    displayedColumns = ['id', 'image', 'name', 'phone', 'address', 'actions'];
    hasItems = false;
    loading = true;

    constructor(
        private categoriesService: CategoriesService,
        private activatedRoute: ActivatedRoute,
        private partnersSrevice: PartnersService,
        private _matDialog: MatDialog,
        private layoutUtilsService: LayoutUtilsService
    ) {
    }

    ngOnInit() {
        const routeSubscription = this.activatedRoute.params.subscribe(
            params => {
                const name = params['name'];
                this.loadCategory(name);
                console.log(this.category);
            }
        );
    }

    loadCategory(name) {
        this.categoriesService.findByName(name).subscribe(
            data => {
                this.category = data;
                this.getListPartnersByCategory(this.category.id);
            },
            error => {
                console.log(error);
            }
        );
    }

    getListPartnersByCategory(id) {
        this.partnersSrevice.findAllByCategory(id).subscribe(
            data => {
                if (data.length == 0) {
                    this.dataSource = new MatTableDataSource<Partner>(data);
                    this.hasItems = true;
                    this.loading = false;
                } else {
                    data.forEach(partner => {
                        this.dataSource = new MatTableDataSource<Partner>();
                        this.partnersSrevice
                            .getImageFile(partner.imageUrl)
                            .subscribe(async data => {
                                partner.imageUrl = await new Promise(
                                    resolve => {
                                        let reader = new FileReader();
                                        reader.readAsDataURL(data);
                                        reader.onload = e => resolve(reader.result);
                                    }
                                );
                                this.dataSource.data.push(partner);
                                this.dataSource.paginator = this.paginator;
                                this.loading = false;
                                this.hasItems = false;
                            });
                    });
                }
            },
            error => {
                console.log(error);
                this.hasItems = true;
                this.loading = false;
            }
        );
    }

    addNewPartner() {
        console.log('ADD NEW PARTNER');
        let dialogRef = this._matDialog.open(PartnersAddComponent, {
            panelClass: 'mail-compose-dialog'
        });
        dialogRef.componentInstance.category = this.category;
        dialogRef.afterClosed().subscribe(response => {
            if (!response) {
                return;
            }
            this.getListPartnersByCategory(this.category.id);
        });
    }

    deletePartner(partner) {
        this.partnersSrevice.delete(partner.id).subscribe(
            data => {
                this.layoutUtilsService.showActionNotification(
                    'Partner ' + partner.email + ' has been delete',
                    MessageType.Delete
                );
                this.getListPartnersByCategory(this.category.id);
            },
            err => {
                this.layoutUtilsService.showActionNotification(
                    err.message,
                    MessageType.Error
                );
            }
        );
    }

    editPartner(partner) {
    }
}

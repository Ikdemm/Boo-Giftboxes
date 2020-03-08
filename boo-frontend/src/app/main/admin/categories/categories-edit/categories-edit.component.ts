import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CategoriesListComponent} from '../categories-list/categories-list.component';
import {LayoutUtilsService} from 'app/core/_utils/layout-utils.service';
import {CategoriesService} from 'app/core/_services/categories.service';
import {Categorie} from 'app/shared/models/categorie.model';


@Component({
    selector: 'app-categories-edit',
    templateUrl: './categories-edit.component.html',
    styleUrls: ['./categories-edit.component.scss']
})
export class CategoriesEditComponent implements OnInit {

    categorieEditForm: FormGroup;
    categorie: Categorie;

    constructor(
        private formBuilder: FormBuilder,
        public matDialogRef: MatDialogRef<CategoriesListComponent>,
        private _matDialog: MatDialog,
        private layoutUtilsService: LayoutUtilsService,
        private categoriesService: CategoriesService
    ) {
    }


    ngOnInit() {
        this.initCategorieForm();
    }

    initCategorieForm() {
        this.categorieEditForm = this.formBuilder.group({
            name: ['', Validators.required],
            //icon: ["", Validators.required],
        });
    }

    updateCategorie() {
    }

}

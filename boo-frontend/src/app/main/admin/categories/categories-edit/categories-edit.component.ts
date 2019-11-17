import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CategoriesListComponent } from '../categories-list/categories-list.component';
import { LayoutUtilsService, MessageType } from 'app/core/_utils/layout-utils.service';
import { CategoriesService } from 'app/core/_services/categories.service';
import { fuseAnimations } from "@fuse/animations";
import { Categorie } from 'app/shared/models/categorie.model';


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
    private categoriesService:CategoriesService
    ) { }


  ngOnInit() {
    this.initCategorieForm();
  }

  initCategorieForm() {
    this.categorieEditForm = this.formBuilder.group({
        name: ["", Validators.required],
        //icon: ["", Validators.required],
    });
  }

  updateCategorie() {
  }

}

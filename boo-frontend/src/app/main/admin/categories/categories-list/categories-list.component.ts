import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { CategoriesAddComponent } from "../categories-add/categories-add.component";
import { fuseAnimations } from "@fuse/animations";
import { Categorie } from "app/shared/models/categorie.model";
import { CategoriesService } from "app/core/_services/categories.service";
import { CategoriesEditComponent } from "../categories-edit/categories-edit.component";
import { Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { async } from "@angular/core/testing";
import { resolve } from "q";
import { read } from "fs";
import { AuthenticationService } from "app/core/_services/authentication.service";

@Component({
    selector: "app-categories-list",
    templateUrl: "./categories-list.component.html",
    styleUrls: ["./categories-list.component.scss"],
    animations: fuseAnimations
})
export class CategoriesListComponent implements OnInit {
    isImageLoading: boolean;
    imageToShow;
    categories: Categorie[] = [];

    constructor(
        private _matDialog: MatDialog,
        private categoriesService: CategoriesService,
        private router: Router,
        private authService:AuthenticationService
    ) {}

    ngOnInit() {
        this.getListCategories();
    }

    async getListCategories() {
        this.categoriesService.findAll().subscribe(data => {
            data.forEach(category => {
                this.categories = [];
                this.categoriesService
                    .getIconFile(category.imageUrl)
                    .subscribe(async data => {
                      category.imageUrl = await new Promise(resolve=>{
                        const reader = new FileReader();
                        reader.onload = (e) => resolve(reader.result);
                        reader.readAsDataURL(data);
                      })
                      this.categories.push(category)
                      
                    });
            });
            console.log(this.categories);
        });
    }
    

    addNewCategorie() {
        console.log("ADD NEW CATEGORIE");
        let dialogRef = this._matDialog.open(CategoriesAddComponent, {
            panelClass: "mail-compose-dialog"
        });
        dialogRef.afterClosed().subscribe(response => {
          if (!response) {
            return;
          }
          this.getListCategories()
        });
    }

    deleteCategorie(id) {
        console.log("Deleting Category " + id + " ...");
        this.categoriesService.delete(id).subscribe(
            data => {
                console.log(data);
                this.getListCategories();
            },
            error => {
                console.log(error);
            }
        );
    }

    openEditCategorie(categorie: Categorie): void {
        console.log("EDIT CATEGORIE");
        let dialogRef = this._matDialog.open(CategoriesEditComponent, {
            panelClass: "mail-compose-dialog"
        });
        dialogRef.componentInstance.categorie = categorie;
        dialogRef.afterClosed().subscribe(response => {
            if (!response) {
                return;
            }
            this.getListCategories();
        });
    }
    explorerCategorie(categorie) {
        console.log(categorie.name);
        this.router.navigate(["admin/categories/", categorie.name]);
    }
}

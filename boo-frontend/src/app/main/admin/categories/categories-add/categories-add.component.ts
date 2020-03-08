import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CategoriesListComponent} from '../categories-list/categories-list.component';
import {LayoutUtilsService, MessageType} from 'app/core/_utils/layout-utils.service';
import {CategoriesService} from 'app/core/_services/categories.service';
import {fuseAnimations} from '@fuse/animations';

@Component({
    selector: 'app-categories-add',
    templateUrl: './categories-add.component.html',
    styleUrls: ['./categories-add.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class CategoriesAddComponent implements OnInit {

    iconFile: File;
    categories: any[] = [];
    categorieAddForm: FormGroup;
    languages: Array<string>;

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
        this.languages = ['java', 'golang', 'node'];
    }

    initCategorieForm() {
        this.categorieAddForm = this.formBuilder.group({
            name: ['', Validators.required],
            icon: ['', Validators.required],
        });
    }

    submitCategorie(categorieAddForm) {
        console.log(categorieAddForm.value);
        let formData = new FormData();
        let object = {
            name: categorieAddForm.get('name').value
        };
        console.log(categorieAddForm.get('icon').value);
        formData.append('model', JSON.stringify(object));
        formData.append('icon', categorieAddForm.get('icon').value);
        this.categoriesService.save(formData).subscribe(
            data => {
                console.log(data);
                this.layoutUtilsService.showActionNotification(
                    'Category ' + object.name + ' has been added',
                    MessageType.Create
                );
                this.matDialogRef.close('saved');
            },
            error => {
                console.log(error);
                this.layoutUtilsService.showActionNotification(
                    error.error.message,
                    MessageType.Error
                );
            });

    }

    onIconFileChange(event) {
        this.iconFile = null;
        this.iconFile = new File([event.target.files[0]], 'categoryicon' + Date.now() + event.target.files[0].name, {type: event.target.files[0].type});
        this.categorieAddForm.get('icon').setValue(this.iconFile);
        console.log(this.iconFile);
    }

    // object to form data before sumbit
    toFormData<T>(formValue: T) {
        const formData = new FormData();
        for (const key of Object.keys(formValue)) {
            const value = formValue[key];
            formData.append(key, value);
        }
        return formData;
    }

}

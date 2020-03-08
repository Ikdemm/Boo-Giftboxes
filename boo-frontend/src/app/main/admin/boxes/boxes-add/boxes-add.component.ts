import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {BoxesService} from 'app/core/_services/boxes.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BoxesListComponent} from '../boxes-list/boxes-list.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {LayoutUtilsService, MessageType} from 'app/core/_utils/layout-utils.service';

@Component({
    selector: 'app-boxes-add',
    templateUrl: './boxes-add.component.html',
    styleUrls: ['./boxes-add.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class BoxesAddComponent implements OnInit {
    chaincode: any;

    imageFile: File;
    catalogFile: File;

    boxAddForm: FormGroup;
    languages: Array<string>;

    constructor(
        private boxService: BoxesService,
        private formBuilder: FormBuilder,
        public matDialogRef: MatDialogRef<BoxesListComponent>,
        private _matDialog: MatDialog,
        private layoutUtilsService: LayoutUtilsService
    ) {
    }

    ngOnInit() {
        this.initBoxForm();
        this.languages = ['java', 'golang', 'node'];
    }

    initBoxForm() {
        this.boxAddForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            catalog: ['', Validators.required],
            priceClient: ['', Validators.required],
            pricePartner: ['', Validators.required],
            image: ['', Validators.required]
        });
    }

    submitBox(boxForm) {
        let object = {
            name: boxForm.get('name').value,
            description: boxForm.get('description').value,
            priceClient: boxForm.get('priceClient').value,
            pricePartner: boxForm.get('pricePartner').value
        };
        let formData = new FormData();
        formData.append('model', JSON.stringify(object));
        formData.append('image', boxForm.get('image').value);
        formData.append('catalog', boxForm.get('catalog').value);

        this.boxService.save(formData).subscribe(
            data => {
                console.log(data);
                this.layoutUtilsService.showActionNotification(
                    'Box ' + object.name + ' has been added',
                    MessageType.Create
                );
                this.matDialogRef.close('saved');
            },
            error => {
                this.layoutUtilsService.showActionNotification(
                    error,
                    MessageType.Error
                );
            }
        );
    }

    onCatalogFileChange(event) {
        this.catalogFile = null;
        this.catalogFile = event.target.files[0];
        this.boxAddForm.get('catalog').setValue(this.catalogFile);
    }

    onImageFileChange(event) {
        this.imageFile = null;
        this.imageFile = event.target.files[0];
        this.boxAddForm.get('image').setValue(this.imageFile);
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

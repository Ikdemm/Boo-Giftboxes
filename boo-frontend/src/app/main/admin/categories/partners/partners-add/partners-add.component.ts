import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {LayoutUtilsService, MessageType} from 'app/core/_utils/layout-utils.service';
import {PartnersListComponent} from '../partners-list/partners-list.component';
import {PartnersService} from 'app/core/_services/partners.service';
import {Categorie} from 'app/shared/models/categorie.model';

@Component({
    selector: 'app-partners-add',
    templateUrl: './partners-add.component.html',
    styleUrls: ['./partners-add.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class PartnersAddComponent implements OnInit {
    logoFile: File;
    categories: any[] = [];
    partnerAddForm: FormGroup;
    languages: Array<string>;
    category: Categorie;

    constructor(
        private partnerService: PartnersService,
        private formBuilder: FormBuilder,
        public matDialogRef: MatDialogRef<PartnersListComponent>,
        private _matDialog: MatDialog,
        private layoutUtilsService: LayoutUtilsService
    ) {
    }

    ngOnInit() {
        this.initPartnerForm();

    }

    initPartnerForm() {
        this.partnerAddForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            phone: ['', Validators.required],
            logo: ['', Validators.required],
            address: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            postalCode: ['', [Validators.required, Validators.maxLength(4)]]
        });
    }

    submitPartenaire(partnerForm) {
        let object = {
            name: partnerForm.get('name').value,
            email: partnerForm.get('email').value,
            phone: partnerForm.get('phone').value,
            password: partnerForm.get('password').value,
            address: partnerForm.get('address').value,
            city: partnerForm.get('city').value,
            state: partnerForm.get('state').value,
            postalCode: partnerForm.get('postalCode').value,
            category: this.category
        };
        let formData = new FormData();
        formData.append('model', JSON.stringify(object));
        formData.append('image', partnerForm.get('logo').value);

        this.partnerService.save(formData).subscribe(
            data => {
                console.log(data);
                this.layoutUtilsService.showActionNotification(
                    'Partner ' + object.name + ' has been added',
                    MessageType.Create
                );
                //        this.matDialogRef.close("saved");
            },
            error => {
                console.log(error);
                this.layoutUtilsService.showActionNotification(
                    error,
                    MessageType.Error
                );
            }
        );
    }

    onLogoFileChange(event) {
        this.logoFile = null;
        this.logoFile = new File(
            [event.target.files[0]],
            'partner' + Date.now() + event.target.files[0].name,
            {type: event.target.files[0].type}
        );
        this.partnerAddForm.get('logo').setValue(this.logoFile);
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

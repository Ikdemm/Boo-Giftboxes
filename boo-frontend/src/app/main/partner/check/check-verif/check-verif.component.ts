import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LayoutUtilsService, MessageType} from 'app/core/_utils/layout-utils.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ChecksListComponent} from '../checks-list/checks-list.component';
import {ChecksService} from 'app/core/_services/checks.service';
import {fuseAnimations} from '@fuse/animations';

@Component({
    selector: 'app-check-verif',
    templateUrl: './check-verif.component.html',
    styleUrls: ['./check-verif.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class CheckVerifComponent implements OnInit {


    codeCheckForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public matDialogRef: MatDialogRef<ChecksListComponent>,
        private _matDialog: MatDialog,
        private _checksService: ChecksService,
        private _layoutUtilsService: LayoutUtilsService
    ) {
    }

    ngOnInit() {
        this.initCategorieForm();
    }

    initCategorieForm() {
        this.codeCheckForm = this.formBuilder.group({
            code: ['', Validators.required],
        });
    }

    submitCheque() {
        this._checksService.confirmeCheque(this.codeCheckForm.get('code').value).subscribe(
            data => {
                this._layoutUtilsService.showActionNotification('Validation cheque à été effectuée', MessageType.Update);
                this.matDialogRef.close('validee');
            },
            err => {
                this._layoutUtilsService.showActionNotification('Validation cheque à été échouéee', MessageType.Error);

            });


    }

}

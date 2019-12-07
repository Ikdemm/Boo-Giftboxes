import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageType, LayoutUtilsService } from 'app/core/_utils/layout-utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ChecksListComponent } from '../checks-list/checks-list.component';
import { ChecksService } from 'app/core/_services/checks.service';
import { fuseAnimations } from '@fuse/animations';

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
    private layoutUtilsService: LayoutUtilsService,
    private checksService: ChecksService
  ) { }
  ngOnInit() {
    this.initCategorieForm();
  }

  initCategorieForm() {
    this.codeCheckForm = this.formBuilder.group({
      code: ["", Validators.required],
    });
  }
  submitCategorie(categorieAddForm) {
    console.log(categorieAddForm.value)

    this.checksService.findAll().subscribe(
      data => {
        console.log(data);
                /*this.layoutUtilsService.showActionNotification(
                    "Category " + data.name + " has been added",
                    MessageType.Create
                );
                this.matDialogRef.close("saved");
                */},
      error => {
        console.log(error)
        this.layoutUtilsService.showActionNotification(
          error.error.message,
          MessageType.Error
        );
      });

  }

}

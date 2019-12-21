import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CheckService } from 'src/app/core/services/check.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { MatDialog } from '@angular/material';
import { ConfirmModalComponent } from 'src/app/shared/modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-boopon',
  templateUrl: './boopon.component.html',
  styleUrls: ['./boopon.component.css']
})
export class BooponComponent implements OnInit {
  booponForm: FormGroup;
  loggedIn: boolean;
  constructor(private _matDialog:MatDialog,private formBuilder: FormBuilder, private checkService: CheckService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.initBooponForm();
    this.authService.isLoggedIn.subscribe(data => {
      this.loggedIn = data;
    })
  }
  initBooponForm() {
    this.booponForm = this.formBuilder.group({
      code: ["", [Validators.required]],
    })
  }
  submitBoopon() {
    if (this.loggedIn) {
      console.log(this.booponForm.value.code)
      console.log(this.booponForm.get('code').value);

      this.checkService.confirmeCheque(this.booponForm.get('code').value).subscribe(
        data => {
          console.log(data)
          let confirmRef = this._matDialog.open(ConfirmModalComponent, {
            data: {
              title: "Valider BOOpon !",
              message: "Validation BOOpon a été validéé",
              titleConfirmButton: "Confirmer",
            },
            width: "500px",
            height: "200px"
          });
        },
        error => {
          console.error
          let confirmRef = this._matDialog.open(ConfirmModalComponent, {
            data: {
              title: "Valider BOOpon !",
              message: "Validation BOOpon a été échouée",
              titleConfirmButton: "Confirmer",
            },
            width: "500px",
            height: "200px"
          });
        })
    }
    else {
      this.router.navigate(['/login'])
    }

  }
}

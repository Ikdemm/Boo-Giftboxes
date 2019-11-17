import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from "@angular/forms";
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-become-partner',
  templateUrl: './become-partner.component.html',
  styleUrls: ['./become-partner.component.css']
})
export class BecomePartnerComponent implements OnInit {

  //@ViewChild("f") becomePartnerForm: NgForm;
  @ViewChild("f", {static: false}) becomePartnerForm: NgForm;

  constructor() { }

  submitForm(){
    console.log("Partner Request submitted!");
    let obj = new User();
    obj.name = this.becomePartnerForm.value.firstName;
    obj.name = this.becomePartnerForm.value.firstName;
  }


  ngOnInit() {
  }

}

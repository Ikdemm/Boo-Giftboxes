import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  constructor(private _formBuilder: FormBuilder, private _authService: AuthenticationService, private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUserInformation().subscribe(data => {
      this.user = data;
      this.initUserForm();
    })
  }
  initUserForm() {
    this.userForm = this._formBuilder.group({
      nom: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required],
      phone: [this.user.phone, Validators.required],
      address: [this.user.address, Validators.required],
      postalCode: [this.user.postalCode, Validators.required],
      city: [this.user.city, Validators.required],
      state: [this.user.state, Validators.required]
    })

  }
  onSubmit() {
    this.user.name=this.userForm.get('nom').value;
    this.user.email=this.userForm.get('email').value;
    this.user.phone=this.userForm.get('phone').value;
    this.user.address=this.userForm.get('address').value;
    this.user.postalCode=this.userForm.get('postalCode').value;
    this.user.city=this.userForm.get('city').value;
    this.user.state=this.userForm.get('state').value;
    this._userService.updateUserInformation(this.user).subscribe(
      data => {
        console.log(data);
        this.user=data;
      },
      err => {

      })
  }


  get form() {
    return this.userForm.controls;
  }


}

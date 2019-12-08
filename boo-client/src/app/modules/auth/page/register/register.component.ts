import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.initSignUpForm()
  }
  initSignUpForm(){
    this.signUpForm = this.formBuilder.group({
      nom:["",[Validators.required]],
      prenom:["",[Validators.required]],
      email:["",[Validators.required,Validators.email]],
      password:["",Validators.required]
    })
  }
  submitSignUp(){
    console.log(this.signUpForm.value)
    let user= new User();
    user.name = this.signUpForm.get("nom").value+" "+this.signUpForm.get("prenom").value;
    user.password =this.signUpForm.get("password").value;
    user.email=this.signUpForm.get("email").value
    this.userService.signUP(user).subscribe(
      data=>{
        console.log(data)
      },
      err=>{
        console.log(err)
      })
  }
  


}

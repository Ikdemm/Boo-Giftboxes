import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  sidelist:any[]=[
    {
      text:"MES INFORMATIONS",
      path:"details"
    },
    {
      text:"MES COMMANDES",
      path:"commandes"
    },
    {
      text:"MES BOO'PONs",
      path:"cheques"
    },
    {
      text:"MODIFIER MOT DE PASSE",
      path:"update-password"
    }
  ]
  constructor( private router:Router,private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUserInformation().subscribe(data => {
      this.user = data;
      
    })
  }
  navigateListCheque(){
    this.router.navigate(['my-profile/cheques']);

  }
  navigateListCommande(){
    this.router.navigate(['my-profile/commandes']);
  }
  navigateDetails(){
    this.router.navigate(['my-profile']);
  }
}

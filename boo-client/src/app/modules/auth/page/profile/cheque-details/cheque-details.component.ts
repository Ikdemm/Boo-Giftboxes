import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { CheckService } from 'src/app/core/services/check.service';

@Component({
  selector: 'app-cheque-details',
  templateUrl: './cheque-details.component.html',
  styleUrls: ['./cheque-details.component.css']
})
export class ChequeDetailsComponent implements OnInit {

  user: User;
  constructor(private _userService: UserService,private chequeService:CheckService) { }

  ngOnInit() {
    this._userService.getUserInformation().subscribe(data => {
      this.user = data;
      console.log(this.user)
    })
    this.chequeService.listCheques().subscribe(data=>{
      console.log(data)
    })
  }

}

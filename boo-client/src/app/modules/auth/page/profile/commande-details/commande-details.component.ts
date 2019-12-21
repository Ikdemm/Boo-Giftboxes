import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-commande-details',
  templateUrl: './commande-details.component.html',
  styleUrls: ['./commande-details.component.css']
})
export class CommandeDetailsComponent implements OnInit {


  user: User;
  constructor(private _userService: UserService,private _commandeSerivce:OrderService) { }

  ngOnInit() {
    this._userService.getUserInformation().subscribe(data => {
      this.user = data;
      console.log(this.user)
    })
    this._commandeSerivce.orderByUser().subscribe(data=>{
      console.log(data)
    })
  }
}

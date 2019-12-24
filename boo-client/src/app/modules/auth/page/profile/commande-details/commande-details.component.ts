import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { OrderService } from 'src/app/core/services/order.service';

export interface PeriodicElement {
  date: string;
  address: string;
  price: number;
  coffret: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '11/02/2019', address: 'Tunis', price: 120, coffret: 'beauté'},
  {date: '11/12/2019', address: 'Tunis', price: 150, coffret: 'loisir'},
  {date: '11/12/2019', address: 'Tunis', price: 100, coffret: 'loisir'},
  {date: '11/12/2019', address: 'Tunis', price: 400, coffret: 'loisir'},
  {date: '11/12/2019', address: 'Tunis', price: 220, coffret: 'beauté'}
];

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

  displayedColumns = ['date', 'address', 'price', 'coffret'];
  dataSource = ELEMENT_DATA;

}

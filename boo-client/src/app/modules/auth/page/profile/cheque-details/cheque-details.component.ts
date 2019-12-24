import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { CheckService } from 'src/app/core/services/check.service';

export interface PeriodicElement {
  date: string;
  code: string;
  price: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '11/02/2019', code: 'Tunis', price: 120, status: 'encaissé'},
  {date: '11/12/2019', code: 'Tunis', price: 150, status: 'encaissé'},
  {date: '11/12/2019', code: 'Tunis', price: 100, status: 'encaissé'},
  {date: '11/12/2019', code: 'Tunis', price: 400, status: 'encaissé'},
  {date: '11/12/2019', code: 'Tunis', price: 220, status: 'livré'}
];

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

  displayedColumns = ['date', 'code', 'price', 'status'];
  dataSource = ELEMENT_DATA;

}

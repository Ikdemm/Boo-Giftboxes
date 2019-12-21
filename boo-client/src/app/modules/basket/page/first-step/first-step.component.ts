import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { OrderDetails } from 'src/app/shared/models/order-details.model';
import { element } from 'protractor';
import { Order } from 'src/app/shared/models/order.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { OrderService } from 'src/app/core/services/order.service';
import { Check } from 'src/app/shared/models/check.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  orderDetailList: Array<OrderDetails>;
  total: number = 0;
  step: Number = 1;
  loggedIn: boolean;
  constructor(private router:Router,private cartService: CartService, private authService: AuthenticationService, private orderService: OrderService) { }

  ngOnInit() {
    this.findAllItems();
    this.authService.isLoggedIn.subscribe(data =>
      this.loggedIn = data
    );

  }
  findAllItems() {
    this.total = 0;
    this.orderDetailList = this.cartService.findAll()
    this.calculTotal()
  }
  calculTotal() {
    this.total = 0;

    this.orderDetailList.forEach(element => {
      this.total += element.coffret.priceClient * element.quantite
    })
  }
  updateQuantite(orderDetail: OrderDetails, event) {
    orderDetail.quantite = event.target.value
    this.cartService.addToCart(orderDetail);
    this.calculTotal()
  }
  confirmerOrder() {
    if (this.loggedIn) {
      let order = new Order();
      order.date = new Date();
      order.detailCommandes = this.orderDetailList;
      console.log(order);
      order.detailCommandes.forEach(detailCommande => {
        let cheque = new Check();
        cheque.email = "monta.garfa.1920@gmail.com"
        detailCommande.cheques = new Array<Check>();
        for (let i = 0; i < detailCommande.quantite; i++)
          detailCommande.cheques[i] = cheque;
      })
      this.orderService.confirmOrder(order).subscribe(
        data => {
          console.log(data)
          localStorage.removeItem('cart');
        },
        err => {
          console.log(err)
        })
    }
    else {
      this.router.navigate(['/login'])
    }

  }
  goToStep(step) {
    this.step = step;
  }
}

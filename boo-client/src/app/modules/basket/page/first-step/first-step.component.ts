import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { OrderDetails } from 'src/app/shared/models/order-details.model';
import { element } from 'protractor';
import { Order } from 'src/app/shared/models/order.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  orderDetailList: Array<OrderDetails>;
  total: number = 0;
  constructor(private cartService: CartService, private authService: AuthenticationService, private orderService: OrderService) { }

  ngOnInit() {
    this.findAllItems();

  }
  findAllItems() {
    this.total = 0;
    this.orderDetailList = this.cartService.findAll()
    this.calculTotal()
  }
  calculTotal() {
    this.total = 0;

    this.orderDetailList.forEach(element => {
      this.total += element.box.priceClient * element.quantity
    })
  }
  updateQuantite(orderDetail: OrderDetails, event) {
    orderDetail.quantity = event.target.value
    this.cartService.addToCart(orderDetail);
    this.calculTotal()
  }
  confirmerOrder() {
    let order = new Order();
    order.date = new Date();
    order.detailCommandes = new Set<OrderDetails>(this.orderDetailList);
    console.log(order)
    this.orderService.confirmOrder(order).subscribe(
      data => {
        console.log(data)
      },
      err=>{
        console.log(err)
      })
  }
}

import { Injectable } from '@angular/core';
import { Box } from 'src/app/shared/models/box.model';
import { OrderDetails } from 'src/app/shared/models/order-details.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  boxes: Array<OrderDetails>;
  constructor() {
    if (!localStorage.getItem("cart"))
      localStorage.setItem("cart",JSON.stringify(new Array<OrderDetails>()));
      this.boxes = JSON.parse(localStorage.getItem("cart"))
  }
  findAll(): Array<OrderDetails> {
    return this.boxes;
  }
  find(id: string): OrderDetails {
    return this.boxes[this.getSelectedIndex(id)];
  }
  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].id == id) {
        return i;
      }
    }
    return -1;
  }
  addToCart(orderDetails:OrderDetails){
    console.log(orderDetails)
    let oDetailIndex= this.boxes.findIndex(element=>element.coffret.id == orderDetails.coffret.id)
    if (oDetailIndex==-1)
    {
      this.boxes.push(orderDetails);    
    }else{
  
      this.boxes[oDetailIndex]=orderDetails;
    }
    localStorage.setItem("cart",JSON.stringify(this.boxes))  
  }
  clearCart(){
    this.boxes = []
    localStorage.removeItem("cart")
  }
  


}
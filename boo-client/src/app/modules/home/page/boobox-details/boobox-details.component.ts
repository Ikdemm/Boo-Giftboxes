import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import { switchMap } from 'rxjs/operators';
import { BoxService } from 'src/app/core/services/box.service';
import { Observable } from 'rxjs';
import { Box } from 'src/app/shared/models/box.model';


import { CartService } from 'src/app/core/services/cart.service';
import { MatDialog } from '@angular/material';
import { OrderDetails } from 'src/app/shared/models/order-details.model';
import { ConfirmModalComponent } from 'src/app/shared/modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-boobox-details',
  templateUrl: './boobox-details.component.html',
  styleUrls: ['./boobox-details.component.css']
})
export class BooboxDetailsComponent implements OnInit {
  gottenBox: Box;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private boxService: BoxService,
    private cartService: CartService,
    private _matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.boxService.findAll().subscribe((data: Box[]) => {
        console.log(data);
        let boxes = data;
        let id = params['id'];
        console.log(id);
        this.gottenBox = boxes.find(box => box.id = id);
        console.log(this.gottenBox);
      });
    });
  }

  addToShoppingCart(box: Box) {
    let orderDetail: OrderDetails = new OrderDetails();
    orderDetail.coffret = this.gottenBox;
    orderDetail.quantite = 1;
    console.log(orderDetail)
    this.cartService.addToCart(orderDetail);

    let confirmRef = this._matDialog.open(ConfirmModalComponent, {
      data: {
        title: "Ajouté au panier !",
        message: box.name + " a été ajouté à votre panier",
        titleConfirmButton: "Finaliser La Commande",
        titleCancelButton: "Poursuivre Vos Achats"
      },
      width: "500px",
      height: "200px"
    });
    confirmRef.afterClosed().subscribe(data => {
      console.log(data)
      if (data)
        this.router.navigate(['basket'])
    })
  }

}

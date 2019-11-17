import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import { switchMap } from 'rxjs/operators';
import { BoxService } from 'src/app/core/services/box.service';
import { Observable } from 'rxjs';
import { Box } from 'src/app/shared/models/box.model';

import { BooboxCatalogComponent } from '../boobox-catalog/boobox-catalog.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-boobox-details',
  templateUrl: './boobox-details.component.html',
  styleUrls: ['./boobox-details.component.css']
})
export class BooboxDetailsComponent implements OnInit {
  gottenBox: Box;

  constructor(
    private route: ActivatedRoute,
    private boxService: BoxService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.boxService.findAll().subscribe((data: Box[]) => {console.log(data);
        let boxes = data;
        let id = params['id'];
        console.log(id);
        this.gottenBox = boxes.find(box => box._id = id);
        console.log(this.gottenBox);
      });
    });
  }

}

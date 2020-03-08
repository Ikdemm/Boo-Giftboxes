import { Component, OnInit } from '@angular/core';
import { BoxService } from 'src/app/core/services/box.service';
import { Observable } from 'rxjs';
import { Box } from 'src/app/shared/models/box.model';

@Component({
  selector: 'app-boobox-list',
  templateUrl: './boobox-list.component.html',
  styleUrls: ['./boobox-list.component.css']
})
export class BooboxListComponent implements OnInit {

  boobox: Box[];

  constructor(private boxService: BoxService) { }

  ngOnInit() {
    this.boxService.findAll().subscribe(data=>{this.boobox=data})
    
  }

}

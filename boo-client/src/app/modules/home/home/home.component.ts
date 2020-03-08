import { Component, OnInit } from '@angular/core';
import { Box } from '../../../shared/models/box.model';
import { Observable } from 'rxjs';
import { BoxService } from 'src/app/core/services/box.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/shared/models/category.model';

/*import { MatDialog } from "@angular/material";*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  boobox : Box[] = [];
  printedBoxes: Box[] = [];
  categories: Category[] = [];

  /* For Carousel */
  mySlideImages = [1,2,3,4,5,6,7].map((i)=> `assets/images/categories/${i}.png`);
  myCarouselImages = [1,2,3,4,5,6,7].map((i)=> `assets/images/categories/${i}.png`);
  mySlideOptions={items: 3, dots: true};
  myCarouselOptions={items: 7, dots: true};

  constructor(
    private boxService: BoxService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) { }

  openBoxDetails(box: Box) {
    this.router.navigate(['/boobox-details', box.id]);
  }

  getBackgroundImages() {
    this.boobox.forEach(function(box){
      box.fileUrl = "assets/files/ctalog.pdf";
      box.imageUrl = "assets/images/home/box.svg";
    })
  }

  getBoxes() {
    this.boxService.findAll().subscribe((data: Box[]) => {
      console.log(data);
      this.boobox = data;
      this.getBackgroundImages();
      this.printedBoxes = this.boobox.slice(0,3);
    },error=>{
      console.log(error);
    })
  }

  getCategories() {
    this.categoryService.findAll().subscribe((data: Category[]) => {
      console.log(data);
      this.categories = data;
      this.getImagesUrl();
    },error=>{
      console.log(error);
    })
  }

  getImagesUrl() {
    this.categories.forEach(category => {
      category.imageUrl = "assets/images/categories/"+category.name+".png";
    });
    console.log(this.categories);
  }

  ngOnInit() {
    this.getBoxes();
    this.getCategories();
  }
    

}

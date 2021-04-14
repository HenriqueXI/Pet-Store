import { CategoriesService } from './../../services/categories.service';
import { Category } from './../../interfaces/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-featured',
  templateUrl: './categories-featured.component.html',
  styleUrls: ['./categories-featured.component.scss']
})
export class CategoriesFeaturedComponent implements OnInit {

  categories: Category[];

  constructor(private categoriesService: CategoriesService ) { }

  ngOnInit(){
    this.getCategories();
  }

  getCategories(): void{
    this.categoriesService.getCategories()
    .subscribe(categories => this.categories = categories.slice())
  }

}

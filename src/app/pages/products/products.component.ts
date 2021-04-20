import { ProductsGetResponse } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsList: Product[];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList(): void{
    this.productService.getProductsList()

    .subscribe(productsGetResponse => {
      this.productsList = productsGetResponse.products
      console.log(this.productsList)
    });
  }
}

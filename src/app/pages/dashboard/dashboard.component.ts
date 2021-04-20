import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  product: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void{
    this.productService.getProduct()
    .subscribe(products => this.product = products)
  }
}

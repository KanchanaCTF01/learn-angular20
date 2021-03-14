import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor() { 
    this.products = [];
    this.products.push({
    name: 'Orange',
    price: 990
    });
    this.products.push({
    name: 'Watermelon',
    price: 1000
    });
    this.products.push({
    name: 'Coconut',
    price: 500
    });
}

  ngOnInit(): void {
  }
  selectedProduct(product: Product) {
    alert(`Product ${product.name} selected`);
  }
}

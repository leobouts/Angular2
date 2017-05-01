import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Product }                from './product';
import { ProductService }         from './product.service';

@Component({
  moduleId: module.id,
  selector: 'my-products',
  templateUrl: 'products.component.html',
  styleUrls: [ 'products.component.css' ]
})
export class ProductsComponent implements OnInit {
  products: Product[];
  
  constructor(
    private productService: ProductService,
    private router: Router) { }

  getProducts(): void {
    this.productService
        .getProducts()
        .then(products => this.products = products);
  }
  ngOnInit(): void {
    this.getProducts();
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
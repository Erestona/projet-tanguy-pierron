import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from 'src/shared/models/product';
import { AddProduct } from 'src/shared/actions/cart-action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private store : Store){}

  
  filteredProducts: Product[]  = [];

  onFilterChange(filteredProducts: Product[]) {
    this.filteredProducts = filteredProducts;
    console.log(this.filteredProducts);
  }
  
  ngOnInit(){}

  addProduct(id : string) {
    console.log(id);
    this.filteredProducts.forEach((product : Product)=>
    {
      if (product.id == id )
      {
        //this.store.dispatch(new AddProduct(product));
        
      }
    });
  }
}

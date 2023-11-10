import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  
  filteredProducts: any[]  = [];

  onFilterChange(filteredProducts: any[]) {
    this.filteredProducts = filteredProducts;
    console.log(this.filteredProducts);
  }
}

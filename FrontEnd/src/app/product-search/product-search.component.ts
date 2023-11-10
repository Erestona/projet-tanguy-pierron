import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { ProductServiceService } from 'src/product-service.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit{
  @Output() filterChange = new EventEmitter<any[]>();

  constructor(private productService : ProductServiceService){}

  criteria: SearchCriteria = { price: '', category: '' };

  filteredProducts : any[] = [];
  products : any[] = [];

  search()
  {
    this.filteredProducts = this.products.filter((products:any )=> {

      const passesCategoryFilter = !this.criteria.category || products.category.includes(this.criteria.category);

      const passesPriceFilter = !this.criteria.price || products.price == this.criteria.price;
      
      return passesCategoryFilter && passesPriceFilter;
    });
    this.filterChange.emit(this.filteredProducts);
    console.log(this.filteredProducts);
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filterChange.emit(this.products);
    });
  }
}

export interface SearchCriteria {
  category: string;
  price: string;
}
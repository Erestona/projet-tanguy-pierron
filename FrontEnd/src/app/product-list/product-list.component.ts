import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from 'src/shared/models/product';
import { AddProduct } from 'src/shared/actions/cart-action';
import { AfterViewInit ,EventEmitter,Output} from '@angular/core';
import { ApiService } from '../api.service';
import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import {
  map,
  distinctUntilChanged,
  debounceTime,
  tap,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { SearchService } from 'src/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private store : Store , private productService : ApiService)
  {
    this.products$ = this.productService.getCatalogue();
  }

  
  
  /*
  onFilterChange(filteredProducts: Product[]) {
    this.filteredProducts = filteredProducts;
    console.log(this.filteredProducts);
  }
  */

  addProduct(id : string) {
    console.log(id);
    this.products$.subscribe((products : Product[])=>
    {
      products.forEach((product : Product)=>
      {
        if (product.id == id )
        {
          this.store.dispatch(new AddProduct(product));
        }
      });
    });
 }

  addSearchProduct(id : string) {
    console.log(id);
    this.products$.subscribe((products : Product[])=>
    {
      products.forEach((product : Product)=>
      {
        if (product.id == id )
        {
          this.store.dispatch(new AddProduct(product));
        }
      });
    });
  }

  @Output() filterChange = new EventEmitter<any[]>();

  searchField$!: Observable<any>;
  @ViewChild('input', { static: true }) input!: ElementRef;
  
  products$! : Observable<Product[]>;
  @Output() searchEvent = new EventEmitter<string>();

  filteredProducts$!: Observable<Product[]>;


  ngOnInit() {
    if (this.input){
    
      this.searchField$ = fromEvent(this.input.nativeElement, `keyup`).pipe(
        map((event : any) => event.target.value),
        debounceTime(300),
        distinctUntilChanged(),

        switchMap((term) =>
          this.productService.search(term).pipe(
            catchError(() => {
              return of([]);
            })
          )
        )
      );
      /*
      this.searchField$.subscribe((term)=>
      {
        this.searchEvent.emit(term);
      })
      */
      this.filteredProducts$ = this.searchField$;
    } else{
      this.products$ = this.productService.getCatalogue();
    }
  }
}

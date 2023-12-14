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
export class ProductListComponent implements AfterViewInit {

  constructor(private store : Store , private productService : SearchService){}

  
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
        this.store.dispatch(new AddProduct(product));
        
      }
    });
  }

  @Output() filterChange = new EventEmitter<any[]>();

  searchField$!: Observable<any>;
  @ViewChild('input', { static: true }) input!: ElementRef;
  
  products : any[] = [];
  @Output() searchEvent = new EventEmitter<string>();


  ngAfterViewInit() {
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
    this.searchField$.subscribe((term)=>
    {
      this.searchEvent.emit(term);
    })
  }
}

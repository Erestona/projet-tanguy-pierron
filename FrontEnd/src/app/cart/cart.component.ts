import { Component , OnInit} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Product } from 'src/shared/models/product';
import { DelProduct } from 'src/shared/actions/cart-action';
import { CartState } from 'src/shared/states/cart-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private store : Store){}

  @Select(CartState.getListeProducts) liste$!:
  Observable<Product[]>;
  ngOnInit() {}

  delProduct(p : Product): void{
    this.store.dispatch(new DelProduct(p));
  }
}

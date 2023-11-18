import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';

import { CartStateModel } from './cart-state-model';
import { AddProduct, DelProduct } from '../actions/cart-action';

@State<CartStateModel>({
    name: 'products',
    defaults: {
      products: [],
    },
  })

@Injectable()
export class CartState {
    @Selector()
    static getNbProducts(state: CartStateModel) {
      return state.products.length;
    }

    @Action(AddProduct)
    add(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: AddProduct
  ) {
    const state = getState();
    patchState({
      products: [...state.products, payload],
    });
  }

  @Action(DelProduct)
  del(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: DelProduct
  ) {
    const state = getState();
    patchState({
      products: state.products.filter(
        (x) => !(payload.id == x.id )
      ),
    });
  }
}
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

  @Selector()
  static getListeProducts(state : CartStateModel){
    return state.products;
  }

  @Action(DelProduct)
  del(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: DelProduct
  ) {
    const state = getState();
    const indexToRemove = state.products.findIndex(x => x.id == payload.id);

    if (indexToRemove !== -1) {
      const updatedProducts = [...state.products];
      updatedProducts.splice(indexToRemove, 1);

    patchState({
      products: updatedProducts,
    });
  }
  }
}
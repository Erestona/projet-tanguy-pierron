import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { ConnectionStateModel } from './connection-state-model';
import { CartStateModel } from './cart-state-model';
import { AddProduct, ClearCart, DelProduct } from '../actions/cart-action';
import { Client } from '../models/client';
import { AddClient } from '../actions/connection-action';

@State<ConnectionStateModel>({
    name: 'client'
  })

@Injectable()
export class ConnexionState {

  @Selector()
  static getClientName(state : ConnectionStateModel)
  {
    return state.client.nom;
  }

  @Selector()
  static getClientSurname(state : ConnectionStateModel)
  {
    return state.client.prenom;
  }

    @Action(AddClient)
    add(
    { getState, patchState }: StateContext<ConnectionStateModel>,
    { payload }: AddClient
    ) {
    const state = getState();
    patchState({
      client : new Client,
    });
  }
}

/*test*/
import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Client } from 'src/shared/models/client';
import { CartState } from 'src/shared/states/cart-state';
import { ConnexionState } from 'src/shared/states/connection-state';
import { ConnectionStateModel } from 'src/shared/states/connection-state-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetWeb';

  @Select(CartState.getNbProducts) nb$!: Observable<number>;
  @Select(ConnexionState.getClientName) clientName$! : Observable<Client>;

  @Select(ConnexionState.getClientSurname) clientSurname$! : Observable<Client>;
  constructor() {}



}

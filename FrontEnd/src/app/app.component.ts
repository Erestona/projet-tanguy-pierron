import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartState } from 'src/shared/states/cart-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetWeb';

  @Select(CartState.getNbProducts) nb$!: Observable<number>;
  constructor() {}
}

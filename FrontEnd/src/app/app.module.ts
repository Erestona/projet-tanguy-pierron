import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LinksComponent } from './links/links.component';
import { CartComponent } from './cart/cart.component';
import { CartModule } from './cart/cart.module';
import {NgxsModule} from '@ngxs/store';
import {CartState} from '../shared/states/cart-state';

const appRoutes : Routes= [
  {path : 'shop', component : ProductListComponent},
  {path : 'cart', component : CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductSearchComponent, 
    LinksComponent, 
    CartComponent, 
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([CartState]),
    CartModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

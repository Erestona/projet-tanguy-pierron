import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'; 
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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { ApiService } from './api.service';
import { ApiHttpInterceptor } from './http-interceptor';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { connexionService } from 'src/connexion.service';

const appRoutes : Routes= [
  {path: '', redirectTo: '/frontpage', pathMatch: 'full'},
  {path: 'frontpage', component : FrontpageComponent},
  {path : 'shop', component : ProductListComponent},
  {path : 'cart', component : CartComponent},
  {path: 'login', component: LoginComponent },
  {path: 'signup', component : SignupComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductSearchComponent, 
    LinksComponent, 
    CartComponent, 
    LoginComponent,
    SignupComponent,
    FrontpageComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([CartState]),
    CartModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : ApiHttpInterceptor , multi : true},
    ApiService,
    connexionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent {
  login: string ="";
  password: string ="";
  isConnected : boolean =false;
  name: string = '';
  surname: string = '';
  constructor(private apiService: ApiService){}

  connexion(){
    this.apiService.loginClient(this.login,this.password).subscribe
    (
      (c)=>
      {
        this.name = c.name;
        this.surname = c.surname;
        this.isConnected = true;

      }     
    );
  }
}

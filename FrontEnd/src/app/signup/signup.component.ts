import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  firstname: string ="";
  lastname: string ="";
  adress: string="";
  postalcode: string="";
  city : string ="";
  email : string="";
  sex: string="";
  phonenumber:string="";
  
  login: string ="";
  password: string ="";
  isConnected : boolean =false;
  name: string = '';
  surname: string = '';
  constructor(private apiService: ApiService){}


  createuser()
  {
    this.apiService.createClient(this.firstname,this.lastname,this.adress,this.postalcode,this.city,this.email,this.sex,this.phonenumber,
      this.login,this.password).subscribe();
      //this.connexion();
  }

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

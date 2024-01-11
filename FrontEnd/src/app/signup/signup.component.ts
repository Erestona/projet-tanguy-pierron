import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  prenom: string ="";
  nom: string ="";
  adresse: string="";
  codepostal: string="";
  ville : string ="";
  email : string="";
  sexe: string="";
  telephone:string="";
  
  login: string ="";
  password: string ="";
  isConnected : boolean =false;
  name: string = '';
  surname: string = '';
  constructor(private apiService: ApiService){}


  createuser()
  {
    this.apiService.createClient(this.prenom,this.nom,this.adresse,this.codepostal,this.ville,this.email,this.sexe,this.telephone,
      this.login,this.password).subscribe();
      //this.connexion();
  }

  connexion(){
    this.apiService.loginClient(this.login,this.password).subscribe
    (
      (c)=>
      {
        this.name = c.nom;
        this.surname = c.prenom;
        this.isConnected = true;

      }     
    );
  }
}

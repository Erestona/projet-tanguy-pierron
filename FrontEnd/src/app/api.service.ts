import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Client } from '../shared/models/client';
import { Product } from '../shared/models/product';
import { environment } from '../environements/environment';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public loginClient(login: string, password: string): Observable<Client> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    data = 'login=' + login + '&password=' + password;
    return this.http.post<Client>(
      environment.backendLoginClient,
      data,
      httpOptions
    );
  }

  public createClient(prenom: string, nom: string, 
    adresse: string,    codepostal: string,
    ville : string , email : string,
    sexe: string , telephone:string,
    login: string , password: string )
  {
    let data: String;
    let httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    data = 'prenom=' + prenom + '&nom=' + nom + '&adresse=' + adresse
    + '&codepostal=' + codepostal + '&ville=' + ville + '&email=' + email 
    + '&sexe=' + sexe + '&telephone=' + telephone + '&login=' + login + '&password='+ password
    return this.http.post<Client>(
      environment.backendCreateClient,
      data,
      httpOptions
    );
  }

  public getCalague(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendCatalogue);
  }
}
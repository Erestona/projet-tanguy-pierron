import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Store } from '@ngxs/store';
import { ConnectionStateModel } from 'src/shared/states/connection-state-model';
import { ConnexionState } from 'src/shared/states/connection-state';
import { AddClient } from 'src/shared/actions/connection-action';
import { Client } from 'src/shared/models/client';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = "";
  password: string = "";
  isConnected: boolean = false;
  name: string = '';
  surname: string = '';
  constructor(private apiService: ApiService, private connectionState: Store) { }


  connexion() {
    this.apiService.loginClient(this.login, this.password).subscribe
      (
        (c) => {
          this.name = c.nom;
          this.surname = c.prenom;
          this.isConnected = true;

        }
      );


    this.apiService.getClient(this.login).subscribe((client: Client) => {
      this.connectionState.dispatch(new AddClient(client));
    });


  }
}

import { Component, DoCheck, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngxs/store';
import { Select } from '@ngxs/store';
import { ConnectionStateModel } from 'src/shared/states/connection-state-model';
import { ConnexionState } from 'src/shared/states/connection-state';
import { Client } from 'src/shared/models/client';
import { Observable } from 'rxjs';
import { connexionService } from 'src/connexion.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  @Select(ConnexionState.getClientName) clientName$!: Observable<Client>;
  isLogged: Boolean = false;

  @Select(ConnexionState.getClientSurname) clientSurname$!: string;


  constructor(private connectionState: Store, private connexionService: connexionService) {
  }

  ngOnInit() {
    this.connexionService.isLogged.subscribe((v) => {
      this.isLogged = v;
    });
  }

  isDisplayed(): boolean {
    if (this.clientName$ == null) {
      return true;
    } else {
      return false;
    }
  }
}

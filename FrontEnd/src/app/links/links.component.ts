import { Component } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {

  constructor(private connectionService :ConnectionService)
  {

  }

   public getCnx() 
   {
    return this.connectionService.getCnx();
   }
}

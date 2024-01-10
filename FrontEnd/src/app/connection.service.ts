import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private cnx: boolean = false;
  private cnxSubject = new Subject<boolean>();

  constructor() { }

  public setCnx( state : boolean)
  {
    this.cnx = state;
    this.cnxSubject.next(state);
  }

  public getCnx() : Observable<boolean> 
  {
    return this.cnxSubject.asObservable();
  }
}

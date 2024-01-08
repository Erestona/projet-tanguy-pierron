import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(filter: string) {
    if (filter === '') {
      return of([]);
    }

    return this.http.get(
      `https://projectweb.onrender.com/api/catalogue/${filter}`
    ) /* .pipe(
        map(response => response[1])
      ) */;
  }
}

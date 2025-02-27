import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetService {
  constructor(private http: HttpClient) { }

  getSets(format: string, pretty: boolean): Observable<object> {
    return this.http.get<object>(`https://api.scryfall.com/sets?format=${format}?pretty=${pretty}`);
  }
}

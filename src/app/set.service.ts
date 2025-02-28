import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { CardSet, CardSetResponse } from './cardsetresponse';

@Injectable({
  providedIn: 'root'
})
export class SetService {
  constructor(private http: HttpClient) {
  }

  getSets(): Observable<CardSet[]> {
    return this.http.get<CardSetResponse>('https://api.scryfall.com/sets')
      .pipe(map(res => res.data));
  }
}

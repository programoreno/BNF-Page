import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { Tumbas } from '../entity/Tumbas';

@Injectable({
  providedIn: 'root'
})
export class TumbasService {

  constructor(private http:HttpClient) { }

  getTumbas():Observable<Tumbas[]>{
    return this.http.get<{ tumbas:Tumbas[] }>('/assets/tumbas.json').pipe(
      map(response => response.tumbas)
    );
  }
}

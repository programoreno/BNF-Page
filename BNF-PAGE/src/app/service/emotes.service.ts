import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { Emotes } from '../entity/Emotes';

@Injectable({
  providedIn: 'root'
})
export class EmotesService {

  constructor(private http:HttpClient) { }

  getEmotes():Observable<Emotes[]>{
    return this.http.get<{ emotes:Emotes[]}>('/assets/emotes.json').pipe(
      map(response => response.emotes)
    );
  }
}

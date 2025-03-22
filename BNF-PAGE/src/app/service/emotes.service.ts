import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { Emotes } from '../entity/Emotes';
import { EmotesMap } from '../entity/EmotesMap';

@Injectable({
  providedIn: 'root'
})
export class EmotesService {

  constructor(private http:HttpClient) { }

  getEmotes():Observable<Emotes[]>{
    return this.http.get<{ emotes:Emotes[]}>('assets/emotes.json').pipe(
      map(response => response.emotes)
    );
  }

  getEmotesMap():Observable<EmotesMap[]>{
    return this.http.get<{ emotesMap:EmotesMap[]}>('assets/emotesMap.json').pipe(
      map(response => response.emotesMap)
    );
  }
}

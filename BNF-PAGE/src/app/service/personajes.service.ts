import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personaje } from '../entity/Personaje';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }
url:string;

  getPersonajes(team:string):Observable<Personaje[]>{
    console.log(team);
    this.url='/assets/'+team+'.json';
    console.log(this.url);
    return this.http.get<{ personajes: Personaje[] }>('assets/plantas.json').pipe(
      map(response => response.personajes)
    );
  }
}

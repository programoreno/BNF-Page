import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personaje } from '../entity/Personaje';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }


  getPersonajes(team: string): Observable<Personaje[]> {
    return this.http.get(`/assets/${team}.json`).pipe(
      map((data: any) => {
        // Encuentra la propiedad que contiene el array de personajes
        const keys = Object.keys(data);
        for (const key of keys) {
          if (Array.isArray(data[key])) {
            return data[key] as Personaje[];
          }
        }
        // Si no se encuentra una propiedad que sea un array, devuelve un array vacío
        return [];
      })
    );
  }
  
  
}

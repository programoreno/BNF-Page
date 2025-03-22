import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Personaje } from '../entity/Personaje';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  constructor(private http:HttpClient) { }

  getPlantas():Observable<Personaje[]>{
    return this.http.get<{ plantas: Personaje[] }>('assets/plantas.json').pipe(
      map(response => response.plantas)
    );
  }

}

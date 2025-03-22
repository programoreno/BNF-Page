import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Lugares } from '../entity/Lugares';

@Injectable({
  providedIn: 'root'
})
export class MapasService {

  constructor(private http:HttpClient) { }
  
  getMapas(): Observable<Lugares[]> {
    return this.http.get<{ maps: Lugares[] }>('assets/mapas.json').pipe(
      map(response => response.maps) // Aquí extraes el array de la propiedad "maps"
    );
  }
}
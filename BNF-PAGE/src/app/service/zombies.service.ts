import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personaje } from '../entity/Personaje';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZombiesService {

  constructor(private http:HttpClient) { }

  getZombies():Observable<Personaje[]>{
    return this.http.get<{ zombies: Personaje[] }>('/assets/zombies.json').pipe(
      map(response => response.zombies)
    );
  }
}

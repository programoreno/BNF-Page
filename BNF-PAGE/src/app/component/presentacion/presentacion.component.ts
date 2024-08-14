import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../entity/Personaje';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PersonajesService } from '../../service/personajes.service';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent implements OnInit{

  constructor(private route:ActivatedRoute, private personajeService:PersonajesService){}

  personajes:Personaje [];
  team:string;
  nom:string;
  //@Input() nom:string;

  ngOnInit(): void {
    this.team = this.route.snapshot.params['pagina'];
    this.nom = this.route.snapshot.params['personaje'];
    console.log(this.nom);
    this.personajeService.getPersonajes(this.team).subscribe(dato =>{
      this.personajes = dato;
      console.log(dato);
    })
  }

}

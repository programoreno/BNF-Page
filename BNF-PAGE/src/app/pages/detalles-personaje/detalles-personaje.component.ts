import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Personaje } from '../../entity/Personaje';
import { PersonajesService } from '../../service/personajes.service';
import { PresentacionComponent } from "../../component/presentacion/presentacion.component";
import { TabsComponent } from "../../component/tabs/tabs.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-personaje',
  standalone: true,
  imports: [CommonModule, PresentacionComponent, TabsComponent],
  templateUrl: './detalles-personaje.component.html',
  styleUrl: './detalles-personaje.component.css'
})
export class DetallesPersonajeComponent {

  constructor(private route:ActivatedRoute, private personajeService:PersonajesService){}

  team:string;
  personaje:Personaje [];
  
  @Input() nom:string;

  ngOnInit(): void {
    this.team = this.route.snapshot.params['pagina'];
    this.nom = this.route.snapshot.params['personaje'];
    this.personajeService.getPersonajes(this.team).subscribe(dato =>{
      this.personaje = dato;
    })
  }

  getStyle(category: string) {
    switch(category) {
      case 'plantas':
        return { 'background': 'linear-gradient(245.59deg, #4d9559 0%, #38703d 28.53%, #133917 75.52%)' };
      case 'zombies':
        return { 'background': 'linear-gradient(245.59deg, #6b3d6b 0%, #7d5780 28.53%, #5f3e5f 75.52%)' };
      default:
        return { 'background': 'linear-gradient(to right, #F4D03F, #16A085)' };
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Personaje } from '../../entity/Personaje';
import { PersonajesService } from '../../service/personajes.service';
import { FooterComponent } from "../../component/footer/footer.component";
import { MenuComponent } from "../../component/menu/menu.component";

@Component({
  selector: 'app-albun',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent, MenuComponent],
  templateUrl: './albun.component.html',
  styleUrl: './albun.component.css'
})
export class AlbunComponent implements OnInit{
  
  constructor(private route:ActivatedRoute, private personajesService: PersonajesService){}

  team:string;
  personajes:Personaje[];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.team = this.route.snapshot.routeConfig?.path || '';
    this.personajesService.getPersonajes(this.team).subscribe(dato =>{
      this.personajes = dato;
    });
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

  getDecoration(cate:string){
    console.log(cate);
    switch(cate) {
      case 'plantas':
        return { 'background': 'green' };
      case 'zombies':
        return { 'background': 'purple' };
      default:
        return { 'background': 'blue' };
      }
  }
}

import { Component, OnInit } from '@angular/core';
import { PlantasService } from '../../service/plantas.service';
import { Personaje } from '../../entity/Personaje';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent implements OnInit{

  constructor(private plantasService: PlantasService){}

  plantas:Personaje [];
  nom = 'peashoter';

  ngOnInit(): void {
    this.plantasService.getPlantas().subscribe(dato =>{
      this.plantas = dato;
      console.log(dato);
    })
  }

}

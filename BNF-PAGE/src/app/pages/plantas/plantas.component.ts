import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlantasService } from '../../service/plantas.service';
import { Personaje } from '../../entity/Personaje';

@Component({
  selector: 'app-plantas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './plantas.component.html',
  styleUrl: './plantas.component.css'
})
export class PlantasComponent implements OnInit{

  plantas:Personaje[];

  constructor(private plantasService: PlantasService){}

  ngOnInit(): void {
    this.plantasService.getPlantas().subscribe(dato => {
      this.plantas = dato;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MapasService } from '../../service/mapas.service';
import { Lugares } from '../../entity/Lugares';

@Component({
  selector: 'app-lugares',
  standalone: true,
  imports: [],
  templateUrl: './lugares.component.html',
  styleUrl: './lugares.component.css'
})
export class LugaresComponent implements OnInit{

  constructor(private lugaresService:MapasService){}

  mapas:Lugares[];

  ngOnInit(): void {
    this.lugaresService.getMapas().subscribe(dato => {
      this.mapas = dato;
    });
  }

}

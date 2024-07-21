import { Component } from '@angular/core';
import { PlantasService } from '../../service/plantas.service';
import { Personaje } from '../../entity/Personaje';
import { Datos } from '../../entity/Datos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skins',
  standalone: true,
  imports: [],
  templateUrl: './skins.component.html',
  styleUrl: './skins.component.css'
})
export class SkinsComponent {

  constructor(private plantasService: PlantasService){}

  plantas:Personaje [];
  skins:Datos[];
  
  nom = 'peashoter';

  ngOnInit(): void {
    this.plantasService.getPlantas().subscribe(dato => {
      this.plantas = dato;
      this.skins = this.plantas.flatMap(planta => planta.skins);
    });
  }

  abrir_info(titulo: string, rareza: string,obtencion: string,frase: string) {
    Swal.fire({
      html:
      `<div id="dialogo">
          <div>
              <h2>${titulo}</h2>
              <p id="${rareza}">${rareza}</p>
              <p>${obtencion}</p>
              <p>${frase}</p>
          </div> 
      </div>`,
      showCloseButton: true,
      showConfirmButton: false,
  });
}

}

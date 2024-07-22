import { Component, OnInit } from '@angular/core';
import { PlantasService } from '../../service/plantas.service';
import { Personaje } from '../../entity/Personaje';
import { Datos } from '../../entity/Datos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit{
  constructor(private plantasService: PlantasService){}

    plantas:Personaje [];
    skins:Datos[];
    sets:Datos[];
    hats:Datos[];
    
    nom = 'chomper';

    ngOnInit(): void {
      this.plantasService.getPlantas().subscribe(dato => {
        this.plantas = dato;
        
      });

      /*FILTRAR DEL JSON LA PLATA QUE QUEREMOS Y Q NOS DE SKINS, SETS Y HATS */
      const filteredPlantas = this.plantas.filter(planta => planta.nombre === this.nom);

      if (filteredPlantas.length > 0) {
        const selectedPlanta = filteredPlantas[0];

        this.skins = selectedPlanta.skins;
        this.sets = selectedPlanta.sets;
        this.hats = selectedPlanta.hats;
      }
      
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

  imageError(event: any) {
    event.target.src = 'assets/not_found.png'
    
  }

}

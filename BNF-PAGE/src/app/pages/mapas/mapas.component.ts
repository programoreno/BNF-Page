import { Component } from '@angular/core';
import { LugaresComponent } from "../../component/lugares/lugares.component";

@Component({
  selector: 'app-mapas',
  standalone: true,
  imports: [LugaresComponent],
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent {

}

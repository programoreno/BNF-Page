import { Component } from '@angular/core';
import { PresentacionComponent } from "../../component/presentacion/presentacion.component";

@Component({
  selector: 'app-plantas',
  standalone: true,
  imports: [PresentacionComponent],
  templateUrl: './plantas.component.html',
  styleUrl: './plantas.component.css'
})
export class PlantasComponent {

}

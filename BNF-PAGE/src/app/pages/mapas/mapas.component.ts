import { Component } from '@angular/core';
import { LugaresComponent } from "../../component/lugares/lugares.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-mapas',
  standalone: true,
  imports: [CommonModule, LugaresComponent, FooterComponent],
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent {

}

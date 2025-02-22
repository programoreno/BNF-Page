import { Component } from '@angular/core';
import { LugaresComponent } from "../../component/lugares/lugares.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../component/footer/footer.component";
import { MenuComponent } from "../../component/menu/menu.component";

@Component({
  selector: 'app-mapas',
  standalone: true,
  imports: [CommonModule, LugaresComponent, FooterComponent, MenuComponent],
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent {

}

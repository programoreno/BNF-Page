import { Component } from '@angular/core';
import { PresentacionComponent } from "../../component/presentacion/presentacion.component";
import { SkinsComponent } from "../../component/skins/skins.component";
import { TabsComponent } from "../../component/tabs/tabs.component";

@Component({
  selector: 'app-plantas',
  standalone: true,
  imports: [PresentacionComponent, TabsComponent],
  templateUrl: './plantas.component.html',
  styleUrl: './plantas.component.css'
})
export class PlantasComponent {

}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InicioComponent } from "../../component/inicio/inicio.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, InicioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

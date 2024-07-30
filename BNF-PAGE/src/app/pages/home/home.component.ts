import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InicioComponent } from "../../component/inicio/inicio.component";
import { PaginasComponent } from "../../component/paginas/paginas.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, InicioComponent, PaginasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

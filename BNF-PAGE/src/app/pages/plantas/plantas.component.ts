import { Component, OnInit, Output } from '@angular/core';
import { PresentacionComponent } from "../../component/presentacion/presentacion.component";
import { TabsComponent } from "../../component/tabs/tabs.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plantas',
  standalone: true,
  imports: [PresentacionComponent, TabsComponent],
  templateUrl: './plantas.component.html',
  styleUrl: './plantas.component.css'
})
export class PlantasComponent implements OnInit{

  constructor(private route:ActivatedRoute, private router:Router){}

  nom:string;

  ngOnInit(): void {
    this.nom = this.route.snapshot.params['planta'];
  }

}

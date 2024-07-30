import { Component, OnInit } from '@angular/core';
import { PresentacionComponent } from '../../component/presentacion/presentacion.component';
import { TabsComponent } from '../../component/tabs/tabs.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-albun-plantas',
  standalone: true,
  imports: [PresentacionComponent, TabsComponent],
  templateUrl: './albun-plantas.component.html',
  styleUrl: './albun-plantas.component.css'
})
export class AlbunPlantasComponent implements OnInit{

  constructor(private route:ActivatedRoute){}

  nom:string;

  ngOnInit(): void {
    this.nom = this.route.snapshot.params['personaje'];
  }

}

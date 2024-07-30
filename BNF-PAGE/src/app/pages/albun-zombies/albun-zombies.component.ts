import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabsComponent } from "../../component/tabs/tabs.component";
import { PresentacionComponent } from "../../component/presentacion/presentacion.component";

@Component({
  selector: 'app-albun-zombies',
  standalone: true,
  imports: [TabsComponent, PresentacionComponent],
  templateUrl: './albun-zombies.component.html',
  styleUrl: './albun-zombies.component.css'
})
export class AlbunZombiesComponent implements OnInit{

  constructor(private route:ActivatedRoute){}

  nom:string;

  ngOnInit(): void {
    this.nom = this.route.snapshot.params['personaje'];
  }

}

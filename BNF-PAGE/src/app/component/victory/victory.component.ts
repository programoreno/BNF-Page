import { Component, OnInit } from '@angular/core';
import { Tumbas } from '../../entity/Tumbas';
import { ActivatedRoute } from '@angular/router';
import { TumbasService } from '../../service/tumbas.service';

@Component({
  selector: 'app-victory',
  standalone: true,
  imports: [],
  templateUrl: './victory.component.html',
  styleUrl: './victory.component.css'
})
export class VictoryComponent implements OnInit{
constructor(private route:ActivatedRoute, private tumbasService:TumbasService){}

  tumbas:Tumbas[];

  ngOnInit(): void {
    this.tumbasService.getTumbas().subscribe(dato =>{
      this.tumbas = dato;
    })
  }

}

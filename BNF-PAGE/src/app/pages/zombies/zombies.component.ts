import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Personaje } from '../../entity/Personaje';
import { ZombiesService } from '../../service/zombies.service';

@Component({
  selector: 'app-zombies',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './zombies.component.html',
  styleUrl: './zombies.component.css'
})
export class ZombiesComponent implements OnInit{

  zombies:Personaje[];

  constructor(private zombiesService: ZombiesService){}

  ngOnInit(): void {
    this.zombiesService.getZombies().subscribe(dato => {
      this.zombies = dato;
    });
  }

}

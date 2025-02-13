import { Component, OnInit } from '@angular/core';
import { EmotesService } from '../../service/emotes.service';
import { ActivatedRoute } from '@angular/router';
import { Emotes } from '../../entity/Emotes';

@Component({
  selector: 'app-gestos',
  standalone: true,
  imports: [],
  templateUrl: './gestos.component.html',
  styleUrl: './gestos.component.css'
})
export class GestosComponent implements OnInit{
constructor(private route:ActivatedRoute, private emotesService:EmotesService){}

  emote:Emotes[];

  ngOnInit():void{
    this.emotesService.getEmotes().subscribe(dato =>{
      this.emote = dato;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albun',
  standalone: true,
  imports: [],
  templateUrl: './albun.component.html',
  styleUrl: './albun.component.css'
})
export class AlbunComponent implements OnInit{
  
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.route.snapshot.params['pagina']+"hola");
  }

}

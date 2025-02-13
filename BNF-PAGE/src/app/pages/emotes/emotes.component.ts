import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../component/footer/footer.component";
import { GestosComponent } from "../../component/gestos/gestos.component";

@Component({
  selector: 'app-emotes',
  standalone: true,
  imports: [CommonModule, FooterComponent, GestosComponent],
  templateUrl: './emotes.component.html',
  styleUrl: './emotes.component.css'
})
export class EmotesComponent {

}

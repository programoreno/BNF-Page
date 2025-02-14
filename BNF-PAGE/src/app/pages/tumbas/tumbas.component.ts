import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { VictoryComponent } from '../../component/victory/victory.component';

@Component({
  selector: 'app-tumbas',
  standalone: true,
  imports: [CommonModule, FooterComponent, VictoryComponent],
  templateUrl: './tumbas.component.html',
  styleUrl: './tumbas.component.css'
})
export class TumbasComponent {

}

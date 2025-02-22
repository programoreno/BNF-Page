import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isMenuOpen: boolean = false;  // Para controlar la visibilidad del menú
  isSubmenuOpen: boolean = false;  // Para controlar la visibilidad del submenú

  // Función para alternar la visibilidad del menú
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Función para alternar la visibilidad del submenú
  toggleSubmenu(event: Event): void {
    event.preventDefault(); // Evitar que el enlace navegue
    this.isSubmenuOpen = !this.isSubmenuOpen;  // Alternar la visibilidad del submenú
  }
}

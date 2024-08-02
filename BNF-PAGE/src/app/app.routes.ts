import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlbunPlantasComponent } from './pages/albun-plantas/albun-plantas.component';
import { AlbunZombiesComponent } from './pages/albun-zombies/albun-zombies.component';
import { AlbunComponent } from './pages/albun/albun.component';

export const routes: Routes = [
    {path : 'home', component:HomeComponent},
    {path : '', redirectTo:'home',pathMatch:'full'},
    {path : ':pagina', component:AlbunComponent},
    {path : 'plantas/:personaje', component:AlbunPlantasComponent},
    {path : 'zombies/:personaje', component:AlbunZombiesComponent},
];

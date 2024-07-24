import { Routes } from '@angular/router';
import { PlantasComponent } from './pages/plantas/plantas.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbunPlantasComponent } from './pages/albun-plantas/albun-plantas.component';

export const routes: Routes = [
    {path : 'home', component:HomeComponent},
    {path : '', redirectTo:'home',pathMatch:'full'},
    {path : 'plantas', component:PlantasComponent},
    {path : 'plantas/:planta', component:AlbunPlantasComponent},
];

import { Routes } from '@angular/router';
import { PlantasComponent } from './pages/plantas/plantas.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path : 'home', component:HomeComponent},
    {path : '', redirectTo:'home',pathMatch:'full'},
    {path : 'plantas/:planta', component:PlantasComponent},
];

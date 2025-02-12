import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlbunComponent } from './pages/albun/albun.component';
import { DetallesPersonajeComponent } from './pages/detalles-personaje/detalles-personaje.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { EmotesComponent } from './pages/emotes/emotes.component';

export const routes: Routes = [
    {path : 'home', component:HomeComponent},
    {path : '', redirectTo:'home',pathMatch:'full'},
    {path : 'plantas', component:AlbunComponent},
    {path : 'zombies', component:AlbunComponent},
    {path : 'general', component:AlbunComponent},
    {path : ':pagina/:personaje', component:DetallesPersonajeComponent},
    {path : 'mapas', component:MapasComponent},
    {path : 'emotes', component:EmotesComponent}
];

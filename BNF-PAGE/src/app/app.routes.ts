import { Routes } from '@angular/router';
import { PlantasComponent } from './pages/plantas/plantas.component';

export const routes: Routes = [
    {path : 'plantas', component:PlantasComponent},
    {path : '', redirectTo:'plantas',pathMatch:'full'},
];

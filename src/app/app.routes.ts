import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'footer', component: FooterComponent},
    { path: 'navbar', component: NabvarComponent},
    { path: 'infomacion', component: InformacionComponent },
    { path: 'formulario', component: FormularioComponent }

];

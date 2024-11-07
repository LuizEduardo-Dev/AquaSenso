import { Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { ModalContatoComponent } from './modal-contato/modal-contato.component';

export const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full' },
{path: 'home', component: HomeComponent},
{path: 'sobre', component: SobreComponent},
{path: 'contato', component: ModalContatoComponent}
];

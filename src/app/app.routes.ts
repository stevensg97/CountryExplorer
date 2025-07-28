import { Routes } from '@angular/router';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/countries', pathMatch: 'full' },
    { path: 'countries', component: CountriesListComponent }
];

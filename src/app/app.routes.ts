import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'about', component: AboutComponent }
];

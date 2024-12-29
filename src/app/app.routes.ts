import { Routes } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

export const routes: Routes = [
    { path: 'welcome', component: TopbarComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    // { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    // {path:"header", component:HeaderComponent},
    // {path:"sidebar", component:SidebarComponent}
    {path:"topbar", component:TopbarComponent}
];

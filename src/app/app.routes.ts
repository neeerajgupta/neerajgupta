import { Routes } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationsComponent } from './components/educations/educations.component';
import { ExperienceComponent } from './components/experience/experience.component';

export const routes: Routes = [
    { path: 'welcome', component: TopbarComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    // { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    // {path:"header", component:HeaderComponent},
    // {path:"sidebar", component:SidebarComponent}
    {path:"topbar", component:TopbarComponent},
    {path:"skills", component:SkillsComponent},
    {path:"education", component:EducationsComponent},
    {path:"experience", component:ExperienceComponent}
];

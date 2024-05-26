import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { TourComponent } from './components/tour/tour.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';

export const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tour', component: TourComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'project', component: ProjectComponent }
];

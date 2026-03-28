import { Routes } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationsComponent } from './components/educations/educations.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { TourComponent } from './components/tour/tour.component';
import { UserlistComponent } from './components/userlist/userlist.component';

export const routes: Routes = [
    { path: 'welcome', component: TopbarComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    // { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    // {path:"header", component:HeaderComponent},
    // {path:"sidebar", component:SidebarComponent}
    {path:"topbar", component:TopbarComponent},
    {path:"skills", component:SkillsComponent},
    {path:"education", component:EducationsComponent},
    {path:"experience", component:ExperienceComponent},
    {path:"project", component:ProjectsComponent},
    {path:"footer", component:FooterComponent},
    {path:"tour", component:TourComponent},
     {path:"userlist", component:UserlistComponent}



];

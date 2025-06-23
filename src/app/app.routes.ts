import { Routes } from '@angular/router';
import {ProfilePictureComponent} from './profile-picture/profile-picture.component';
import {ProjectsComponent} from './projects/projects.component';
import {SkillsComponent} from './skills/skills.component';
import {ContactMeComponent} from './contact-me/contact-me.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path : 'home' , component : ProfilePictureComponent  , pathMatch: 'full'},
    {path : 'projects' , component : ProjectsComponent },
    {path : 'skills' , component : SkillsComponent  },
    {path : 'contactMe' , component : ContactMeComponent  }
];


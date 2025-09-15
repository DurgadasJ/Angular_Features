import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'feature',component:HelloComponent},
    {path:'home', component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'',redirectTo:'/feature',pathMatch:'full'}
];

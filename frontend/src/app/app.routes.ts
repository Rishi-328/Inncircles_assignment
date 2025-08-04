import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddHelperComponent } from './pages/add-helper/add-helper.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'home',component: HomeComponent},
    {path:'add-helper',component:AddHelperComponent}
];

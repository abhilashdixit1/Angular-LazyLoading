import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/login/login.component'
import {ProfileComponent} from '../app/profile/profile.component'


//The syntax for lazyloading has been chnaged in Angular 8 Keep yourself updated

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'home',loadChildren:'./home/home.module#HomeModule'},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from '../department/department.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

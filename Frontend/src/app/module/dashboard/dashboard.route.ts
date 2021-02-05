import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent, 
    data: { title: 'List', breadcrumb: 'List' } 
  }
];

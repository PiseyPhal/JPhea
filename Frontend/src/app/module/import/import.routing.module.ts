import { Routes } from '@angular/router';
import { ImportListComponent } from './import-list/import-list.component';
import { ImportFormComponent } from './import-form/import-form.component';
import { ImportViewComponent } from './import-view/import-view.component';


export const ImportRoutes: Routes = [
  { 
    path: '', 
    component: ImportListComponent, 
    data: { title: 'List', breadcrumb: 'List' } 
  },
  {
    path: "add",
    component: ImportFormComponent,
    data: { title: 'Form', breadcrumb: 'New' } 
  },
  {
    path: "view/:id",
    component: ImportViewComponent,
    data: {title: 'View', breadcrumb: 'View'}
  }
];
import { Route } from '@angular/router';
import { OverviewComponent } from './overview/page/overview/overview.component';
import { CategoryComponent } from './categories/page/category/category.component';
import { TaskCreateComponent } from './task/page/task-create/task-create.component';
import { CategoriesComponent } from './categories/page/categories/categories.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:id',
    component: CategoryComponent,
  },
  {
    path: 'categories/create',
    component: CategoryComponent,
  },
  {
    path: 'task/create',
    component: TaskCreateComponent,
  },
];

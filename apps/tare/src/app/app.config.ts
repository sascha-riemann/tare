import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { categoryReducer } from './categories/state/category.reducer';
import { getMetaReducers } from './shared/state/local-storage.reducer';
import { taskReducer } from './task/state/task.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideStore(
      { categories: categoryReducer, tasks: taskReducer },
      { metaReducers: getMetaReducers() },
    ),
  ],
};

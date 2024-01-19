import { createAction, props } from '@ngrx/store';
import { Crud, NGRX_FACTORY } from '../../shared/state/ngrx.utils';
import { Category, CreateCategory } from '../model/category.model';

export const CATEGORY_SOURCE = 'Category';

export const categoryCreate = createAction(
  NGRX_FACTORY(CATEGORY_SOURCE, Crud.Create),
  props<{ category: CreateCategory }>(),
);

export const updateCategory = createAction(
  NGRX_FACTORY(CATEGORY_SOURCE, Crud.Update),
  props<{ category: Category }>(),
);

export const removeCategory = createAction(
  NGRX_FACTORY(CATEGORY_SOURCE, Crud.Delete),
  props<{ category: Category }>(),
);

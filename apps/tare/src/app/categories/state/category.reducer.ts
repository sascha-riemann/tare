import { createReducer, on } from '@ngrx/store';
import {
  categoryCreate,
  removeCategory,
  updateCategory,
} from './category.actions';
import { Category, CreateCategory } from '../model/category.model';

export const categoryReducer = createReducer(
  [] as Category[],
  on(
    categoryCreate,
    (state: Category[], arg: { category: CreateCategory }): Category[] => {
      console.log('State Category', arg.category);
      console.log('Create Category', arg.category);
      return [
        ...state,
        {
          id: state.length + 1,
          ...arg.category,
        },
      ];
    },
  ),
  on(updateCategory, (state: Category[], arg: { category: Category }) => {
    const index = state.findIndex((c) => c.id === arg.category.id);
    state[index] = arg.category;
    return state;
  }),
  on(removeCategory, (state: Category[], arg: { category: Category }) => {
    const index = state.findIndex((c) => c.id === arg.category.id);
    return state.splice(index, 1);
  }),
);

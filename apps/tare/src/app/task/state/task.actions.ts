import { createAction, props } from '@ngrx/store';
import { Crud, NGRX_FACTORY } from '../../shared/state/ngrx.utils';
import { CreateTask, Task } from '../model/task';

export const TASKS_SOURCE = 'Tasks';

const CURRENT_TASK = 'Current';

export const createTask = createAction(
  NGRX_FACTORY(TASKS_SOURCE, Crud.Create),
  props<{ task: CreateTask }>(),
);

export const readTask = createAction(
  NGRX_FACTORY(TASKS_SOURCE, Crud.Read),
  props<{ task: Task }>(),
);

export const updateTask = createAction(
  NGRX_FACTORY(TASKS_SOURCE, Crud.Update),
  props<{ task: Task }>(),
);

export const removeTask = createAction(
  NGRX_FACTORY(TASKS_SOURCE, Crud.Delete),
  props<{ task: Task }>(),
);

export const currentTask = createAction(
  NGRX_FACTORY(TASKS_SOURCE, CURRENT_TASK),
);

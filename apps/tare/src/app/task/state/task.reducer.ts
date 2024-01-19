import { createReducer, on } from '@ngrx/store';
import {
  createTask,
  currentTask,
  removeTask,
  updateTask,
} from './task.actions';
import { CreateTask, Task } from '../model/task';
import { isWithinInterval } from 'date-fns';

export const taskReducer = createReducer(
  [] as Task[],
  on(createTask, (state: Task[], arg: { task: CreateTask }): Task[] => {
    return [
      ...state,
      {
        id: state.length + 1,
        ...arg.task,
      },
    ];
  }),
  on(updateTask, (state: Task[], arg: { task: Task }) => {
    const index = state.findIndex((c) => c.id === arg.task.id);
    state[index] = arg.task;
    return state;
  }),
  on(removeTask, (state: Task[], arg: { task: Task }) => {
    const index = state.findIndex((c) => c.id === arg.task.id);
    return state.splice(index, 1);
  }),
);

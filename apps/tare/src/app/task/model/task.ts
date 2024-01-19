import { Category } from '../../categories/model/category.model';

export interface Task {
  id: number;
  name: string;
  interval: Interval;
  category?: Category;
  repeat: string[];
  description?: string;
  tasks: Task[];
}

export type CreateTask = Omit<Task, 'id'>;

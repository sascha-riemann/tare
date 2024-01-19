export interface Category {
  id: number;
  name: string;
  color: string;
}

export type CreateCategory = Omit<Category, 'id'>;

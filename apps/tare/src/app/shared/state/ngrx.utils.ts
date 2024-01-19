export enum Crud {
  Create = 'Create',
  Read = 'Read',
  Update = 'Update',
  Delete = 'Delete',
}

export const NGRX_FACTORY = (source: string, type: Crud | string) => {
  return `[${source}] ${type}`;
};

import { createAction, props, union } from '@ngrx/store';

export const clear = createAction('[Media Search] Clear');

export const search = createAction(
  '[Media Search] Search',
  props<{ query: string }>()
);

export const searchSuccess = createAction('[Media Search] Search Success');

const all = union({ clear, search, searchSuccess });
export type SearchActionsUnion = typeof all;

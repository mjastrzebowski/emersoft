import { createAction, props, union } from '@ngrx/store';
import { MediaType } from 'src/app/media/models';

export const clear = createAction('[Media Filter] Clear');

export const set = createAction(
  '[Media Filter] Set',
  props<{ filter: MediaType }>()
);

const all = union({ clear, set });
export type FilterActionsUnion = typeof all;

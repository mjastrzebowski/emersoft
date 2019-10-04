import { createAction, props, union } from '@ngrx/store';

import { Media } from '../models';

export const load = createAction('[Media] Load');

export const loadSuccess = createAction(
  '[Media] Load Success',
  props<{ items: Media[] }>()
);

export const loadFailure = createAction(
  '[Workspaces] Load Failure',
  props<{ error: string }>()
);

const all = union({ load, loadSuccess, loadFailure });
export type MediaActionsUnion = typeof all;

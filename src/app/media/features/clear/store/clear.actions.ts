import { createAction, union } from '@ngrx/store';

export const clear = createAction('[Media Clear] Clear');

const all = union({ clear });
export type ClearActionsUnion = typeof all;

import { createAction, props, union } from '@ngrx/store';

import { Order } from '../models';

export const clear = createAction('[Media Order] Clear');

export const set = createAction('[Media Order] Set', props<{ order: Order }>());

const all = union({ clear, set });
export type OrderActionsUnion = typeof all;

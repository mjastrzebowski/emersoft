import { createReducer, on } from '@ngrx/store';

import { Order } from '../models';
import * as OrderActions from './order.actions';

export interface OrderState {
  order: Order;
}

const initialState: OrderState = {
  order: null
};

const reducer = createReducer(
  initialState,

  on(OrderActions.set, (state, { order }) => ({
    ...state,
    order
  })),

  on(OrderActions.clear, () => ({
    ...initialState
  }))
);

export function orderReducer(
  state: OrderState,
  action: OrderActions.OrderActionsUnion
) {
  return reducer(state, action);
}

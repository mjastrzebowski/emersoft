import { createFeatureSelector, createSelector } from '@ngrx/store';

import { OrderState } from './order.reducer';

export const orderSelectorName = 'order';

const getOrderState = createFeatureSelector<OrderState>(orderSelectorName);

export const getOrder = createSelector(
  getOrderState,
  (state: OrderState) => !!state && state.order
);

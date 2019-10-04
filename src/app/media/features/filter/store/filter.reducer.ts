import { createReducer, on } from '@ngrx/store';
import { MediaType } from 'src/app/media/models';

import * as FilterActions from './filter.actions';

export interface FilterState {
  filter: MediaType;
}

const initialState: FilterState = {
  filter: null
};

const reducer = createReducer(
  initialState,

  on(FilterActions.set, (state, { filter }) => ({
    ...state,
    filter
  })),

  on(FilterActions.clear, () => ({
    ...initialState
  }))
);

export function filterReducer(
  state: FilterState,
  action: FilterActions.FilterActionsUnion
) {
  return reducer(state, action);
}

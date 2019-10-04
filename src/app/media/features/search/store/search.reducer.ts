import { createReducer, on } from '@ngrx/store';

import * as SearchActions from './search.actions';

export interface SearchState {
  loading: boolean;
  query: string;
}

const initialState: SearchState = {
  loading: false,
  query: ''
};

const reducer = createReducer(
  initialState,

  on(SearchActions.search, (state, { query }) => ({
    ...state,
    loading: true,
    query
  })),

  on(SearchActions.searchSuccess, (state) => ({
    ...state,
    loading: false
  })),

  on(SearchActions.clear, () => ({
    ...initialState
  }))
);

export function searchReducer(
  state: SearchState,
  action: SearchActions.SearchActionsUnion
) {
  return reducer(state, action);
}

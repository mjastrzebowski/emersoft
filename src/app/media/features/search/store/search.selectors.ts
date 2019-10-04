import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SearchState } from './search.reducer';

export const searchSelectorName = 'search';

const getSearchState = createFeatureSelector<SearchState>(searchSelectorName);

export const getSearchQuery = createSelector(
  getSearchState,
  (state: SearchState) => !!state && state.query
);

export const getSearchLoading = createSelector(
  getSearchState,
  (state: SearchState) => !!state && state.loading
);

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FilterState } from './filter.reducer';

export const filterSelectorName = 'filter';

const getFilterState = createFeatureSelector<FilterState>(filterSelectorName);

export const getFilter = createSelector(
  getFilterState,
  (state: FilterState) => !!state && state.filter
);

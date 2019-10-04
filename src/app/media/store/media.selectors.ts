import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getFilter, getOrder, getSearchQuery, Order } from '../features';
import { Media, MediaType } from '../models';
import { mediaAdapter, MediaState } from './media.reducer';

export const mediaSelectorName = 'media';
export const getMediaState = createFeatureSelector<MediaState>(
  mediaSelectorName
);

export const {
  selectIds: getMediaIds,
  selectEntities: getMediaEntities,
  selectAll: getMediaAll,
  selectTotal: getMediaTotal
} = mediaAdapter.getSelectors(getMediaState);

export const getMediaLoading = createSelector(
  getMediaState,
  (state: MediaState) => !!state && state.loading
);

export const getMediaLoaded = createSelector(
  getMediaState,
  (state: MediaState) => !!state && state.loaded
);

export const getMediaError = createSelector(
  getMediaState,
  (state: MediaState) => !!state && state.error
);

export const getMediaFiltered = createSelector(
  getMediaAll,
  getFilter,
  (items: Media[], filter: MediaType) =>
    (!!items &&
      !!filter &&
      items.filter(({ type }: Media) => type === filter)) ||
    items
);

export const getMediaSearched = createSelector(
  getMediaFiltered,
  getSearchQuery,
  (items: Media[], query: string) =>
    !!items &&
    items.filter(({ title }: Media) => new RegExp(query, 'i').test(title))
);

export const getMediaResults = createSelector(
  getMediaSearched,
  getOrder,
  (items: Media[], order: Order) =>
    (!!items && (order === Order.desc && [...items].reverse())) || items
);

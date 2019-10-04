import { createFeatureSelector, createSelector } from '@ngrx/store';

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

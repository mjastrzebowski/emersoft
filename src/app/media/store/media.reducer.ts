import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Media } from '../models';
import * as MediaActions from './media.actions';

export interface MediaState extends EntityState<Media> {
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const mediaAdapter: EntityAdapter<Media> = createEntityAdapter<Media>({
  selectId: (media: Media) => media.id,
  sortComparer: (a: Media, b: Media) => a.title.localeCompare(b.title)
});

const initialState: MediaState = mediaAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: null
});

const reducer = createReducer(
  initialState,
  on(MediaActions.load, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(MediaActions.loadSuccess, (state, { items }) =>
    mediaAdapter.addAll(items || [], {
      ...state,
      loading: false,
      loaded: true,
      error: null
    })
  ),

  on(MediaActions.loadFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

export function mediaReducer(
  state: MediaState,
  action: MediaActions.MediaActionsUnion
) {
  return reducer(state, action);
}

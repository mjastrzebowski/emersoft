import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MediaType } from 'src/app/media/models';

import { FilterActions, getFilter } from '../store';

@Component({
  selector: 'mrs-media-filter-container',
  templateUrl: './filter.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterContainerComponent {
  filter$: Observable<MediaType> = this.store.pipe(select(getFilter));

  constructor(private store: Store<{}>) {}

  set(filter: MediaType) {
    this.store.dispatch(FilterActions.set({ filter }));
  }
}

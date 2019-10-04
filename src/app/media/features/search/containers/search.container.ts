import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getSearchLoading, getSearchQuery, SearchActions } from '../../store';

@Component({
  selector: 'mrs-media-search-container',
  templateUrl: './search.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchContainerComponent {
  loading$: Observable<boolean> = this.store.pipe(select(getSearchLoading));
  query$: Observable<string> = this.store.pipe(select(getSearchQuery));

  constructor(private store: Store<{}>) {}

  search(query: string) {
    this.store.dispatch(SearchActions.search({ query }));
  }
}

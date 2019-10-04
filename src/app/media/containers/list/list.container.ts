import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Media } from '../../models';
import { getMediaAll, MediaActions } from '../../store';

@Component({
  selector: 'mrs-media-list-container',
  templateUrl: './list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListContainerComponent implements OnInit {
  items$: Observable<Media[]> = this.store.pipe(select(getMediaAll));

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.store.dispatch(MediaActions.load());
  }
}

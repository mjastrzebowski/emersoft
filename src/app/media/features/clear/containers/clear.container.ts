import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ClearActions } from '../store';

@Component({
  selector: 'mrs-media-clear-container',
  templateUrl: './clear.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClearContainerComponent {
  constructor(private store: Store<{}>) {}

  clear() {
    this.store.dispatch(ClearActions.clear());
  }
}

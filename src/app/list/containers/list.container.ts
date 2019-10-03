import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'mrs-list-container',
  templateUrl: './list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListContainerComponent {
  constructor(private store: Store<{}>) {}
}

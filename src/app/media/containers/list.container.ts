import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mrs-list-container',
  templateUrl: './list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListContainerComponent {
  // constructor(private store: Store<{}>) {}
}

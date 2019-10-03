import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Media } from '../../models';

@Component({
  selector: 'mrs-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() items: Media[];

  trackItemId(index: number, item: any) {
    return item.id;
  }
}

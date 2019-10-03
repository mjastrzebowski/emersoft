import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mrs-list-item',
  templateUrl: './list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() item: {};
}

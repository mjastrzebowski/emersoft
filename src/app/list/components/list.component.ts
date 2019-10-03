import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mrs-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() items: {}[];
}

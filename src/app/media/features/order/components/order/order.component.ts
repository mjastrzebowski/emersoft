import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Order } from '../../models';

@Component({
  selector: 'mrs-media-order',
  templateUrl: './order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent {
  @Input() order: Order = null;
  @Output() set = new EventEmitter<string>();

  values = [
    { value: Order.asc, label: 'Ascending' },
    { value: Order.desc, label: 'Descending' }
  ];

  input: FormControl = new FormControl();
}

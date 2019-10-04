import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Order } from '../models';
import { getOrder, OrderActions } from '../store';

@Component({
  selector: 'mrs-media-order-container',
  templateUrl: './order.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderContainerComponent {
  order$: Observable<Order> = this.store.pipe(select(getOrder));

  constructor(private store: Store<{}>) {}

  set(order: Order) {
    this.store.dispatch(OrderActions.set({ order }));
  }
}

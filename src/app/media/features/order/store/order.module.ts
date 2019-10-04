import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { orderReducer } from './order.reducer';
import { orderSelectorName } from './order.selectors';

@NgModule({
  imports: [StoreModule.forFeature(orderSelectorName, orderReducer)]
})
export class OrderStoreModule {}

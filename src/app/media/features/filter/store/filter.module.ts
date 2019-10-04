import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { filterReducer } from './filter.reducer';
import { filterSelectorName } from './filter.selectors';

@NgModule({
  imports: [StoreModule.forFeature(filterSelectorName, filterReducer)]
})
export class FilterStoreModule {}

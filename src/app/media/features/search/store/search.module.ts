import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { searchReducer } from './search.reducer';
import { searchSelectorName } from './search.selectors';

@NgModule({
  imports: [StoreModule.forFeature(searchSelectorName, searchReducer)]
})
export class SearchStoreModule {}

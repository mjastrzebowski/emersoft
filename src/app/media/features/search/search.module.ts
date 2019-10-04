import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchComponent } from './components';
import { SearchContainerComponent } from './containers';
import { SearchStoreModule } from './store';

const components = [SearchComponent];
const containers = [SearchContainerComponent];

@NgModule({
  declarations: [...components, ...containers],
  entryComponents: [...containers],
  exports: [...containers],
  imports: [CommonModule, SearchStoreModule]
})
export class SearchModule {}

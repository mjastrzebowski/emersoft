import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListComponent, ListItemComponent, PageComponent } from './components';
import { ListContainerComponent } from './containers';
import { SearchModule } from './features';
import { MediaRoutingModule } from './media.routing';
import { MediaStoreModule } from './store';

const components = [ListComponent, ListItemComponent, PageComponent];
const containers = [ListContainerComponent];

@NgModule({
  declarations: [...components, ...containers],
  entryComponents: [PageComponent],
  imports: [CommonModule, MediaRoutingModule, MediaStoreModule, SearchModule]
})
export class MediaModule {}

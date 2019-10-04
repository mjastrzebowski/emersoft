import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListComponent, ListItemComponent } from './components';
import { ListContainerComponent } from './containers';
import { MediaRoutingModule } from './media.routing';
import { MediaStoreModule } from './store';

const components = [ListComponent, ListItemComponent];
const containers = [ListContainerComponent];

@NgModule({
  declarations: [...components, ...containers],
  entryComponents: [...containers],
  imports: [CommonModule, MediaRoutingModule, MediaStoreModule]
})
export class MediaModule {}

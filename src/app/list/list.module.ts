import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListComponent } from './components';
import { ListContainerComponent } from './containers';

const components = [ListComponent];
const containers = [ListContainerComponent];

@NgModule({
  declarations: [...components, ...containers],
  entryComponents: [...containers],
  imports: [CommonModule]
})
export class ListModule {}

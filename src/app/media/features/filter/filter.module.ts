import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FilterComponent } from './components';
import { FilterContainerComponent } from './containers';
import { FilterStoreModule } from './store';

const components = [FilterComponent];
const containers = [FilterContainerComponent];

@NgModule({
  declarations: [...components, ...containers],
  entryComponents: [...containers],
  exports: [...containers],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FilterStoreModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class FilterModule {}

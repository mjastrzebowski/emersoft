import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { SearchComponent } from './components';
import { SearchContainerComponent } from './containers';
import { SearchStoreModule } from './store';

const components = [SearchComponent];
const containers = [SearchContainerComponent];

@NgModule({
  declarations: [...components, ...containers],
  entryComponents: [...containers],
  exports: [...containers],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchStoreModule,
    MatCardModule,
    MatInputModule
  ]
})
export class SearchModule {}

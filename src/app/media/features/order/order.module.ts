import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { OrderComponent } from './components';
import { OrderContainerComponent } from './containers';
import { OrderStoreModule } from './store';

const components = [OrderComponent];
const containers = [OrderContainerComponent];

@NgModule({
  declarations: [...components, ...containers],
  entryComponents: [...containers],
  exports: [...containers],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderStoreModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class OrderModule {}

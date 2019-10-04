import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ClearContainerComponent } from './containers';
import { ClearStoreModule } from './store';

const containers = [ClearContainerComponent];

@NgModule({
  declarations: [...containers],
  exports: [...containers],
  imports: [CommonModule, ClearStoreModule, MatButtonModule, MatIconModule]
})
export class ClearModule {}

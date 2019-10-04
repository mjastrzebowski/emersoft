import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { ClearEffects } from './clear.effects';

@NgModule({
  imports: [EffectsModule.forFeature([ClearEffects])]
})
export class ClearStoreModule {}

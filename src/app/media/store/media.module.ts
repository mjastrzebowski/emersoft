import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MediaService } from '../services';
import { MediaEffects } from './media.effects';
import { mediaReducer } from './media.reducer';
import { mediaSelectorName } from './media.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(mediaSelectorName, mediaReducer),
    EffectsModule.forFeature([MediaEffects])
  ],
  providers: [MediaService]
})
export class MediaStoreModule {}

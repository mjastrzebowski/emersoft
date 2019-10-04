import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';

import { FilterActions } from '../../filter';
import { OrderActions } from '../../order';
import { SearchActions } from '../../search';
import * as ClearActions from './clear.actions';

@Injectable()
export class ClearEffects {
  clear$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClearActions.clear),
      mergeMap(() => [
        FilterActions.clear(),
        OrderActions.clear(),
        SearchActions.clear()
      ])
    )
  );

  constructor(private actions$: Actions) {}
}

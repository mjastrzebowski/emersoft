import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Media } from '../models';
import { MediaService } from '../services';
import * as MediaActions from './media.actions';

@Injectable()
export class MediaEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MediaActions.load),
      switchMap(() =>
        this.mediaService.get().pipe(
          map((items: Media[]) => MediaActions.loadSuccess({ items })),
          catchError(({ error }: HttpErrorResponse) =>
            of(MediaActions.loadFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private mediaService: MediaService) {}
}

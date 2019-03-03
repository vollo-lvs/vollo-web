import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as beheerScholenActions from './actions';
import { HttpClient } from '@angular/common/http';
import { VolloKernState } from '../index';
import { AbstractEffects } from '../../common/abstract-effects.model';
import {
  ophalenScholen,
  ophalenSchool,
  opslaanSchool
} from '../../common/api-clients/beheer-scholen.client';

@Injectable()
export class BeheerScholenStoreEffects extends AbstractEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private store: Store<VolloKernState.State>
  ) {
    super(http);
  }

  @Effect()
  selecteren$: Observable<Action> = this.actions$.pipe(
    ofType(beheerScholenActions.ActionTypes.SELECTEREN),
    mergeMap((action: beheerScholenActions.SelecterenAction) => [
      new beheerScholenActions.OphalenSchoolAction(action.id)
    ])
  );

  @Effect()
  ophalen$ = this.createEffect(
    this.actions$,
    beheerScholenActions.ActionTypes.OPHALEN,
    ophalenScholen
  );

  @Effect()
  ophalenSchool$ = this.createEffect(
    this.actions$,
    beheerScholenActions.ActionTypes.OPHALEN_SCHOOL,
    ophalenSchool
  );

  @Effect()
  opslaanSchool$ = this.createEffect(
    this.actions$,
    beheerScholenActions.ActionTypes.OPSLAAN_SCHOOL,
    opslaanSchool
  );
}

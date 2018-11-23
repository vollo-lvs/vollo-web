import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as leerlingActions from './actions';
import { HttpClient } from '@angular/common/http';
import { Leerling } from '../../groep/leerling.model';

@Injectable()
export class LeerlingStoreEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  selecteren$: Observable<Action> = this.actions$.pipe(
    ofType(leerlingActions.ActionTypes.SELECTEREN),
    mergeMap((action: leerlingActions.SelecterenAction) =>
      observableOf(new leerlingActions.OphalenAction(action.id))
    )
  );

  @Effect()
  ophalen$: Observable<Action> = this.actions$.pipe(
    ofType(leerlingActions.ActionTypes.OPHALEN),
    mergeMap((action: leerlingActions.OphalenAction) =>
      this.http.get<Leerling>(`/api/leerling/${action.id}`).pipe(
        map(groep => new leerlingActions.OphalenSuccesAction(groep)),
        catchError(error => observableOf(new leerlingActions.OphalenMisluktAction(error)))
      )
    )
  );
}
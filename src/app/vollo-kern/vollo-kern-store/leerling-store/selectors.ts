import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';
import { Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';
import { Notitie } from '../../common/model/notitie.model';
import { LeerlingHistorieRecord } from '../../common/model/leerling-historie-record.model';
import { Ouder } from '../../common/model/ouder.model';

const getLeerling = (state: State): any => state.leerling;

const getGeselecteerd = (state: State): any => state.geselecteerd;

const getScores = (state: State): any => state.scores;

const getOuders = (state: State): any => state.ouders;

const getHistorie = (state: State): any => state.historie;

const getNotities = (state: State): any => state.notities;

const getNotitieFormZichtbaar = (state: State): any => state.notitieFormZichtbaar;

export const selectLeerlingState: MemoizedSelector<object, State> = createFeatureSelector<State>(
  'leerling'
);

export const selectLeerling: MemoizedSelector<object, Leerling> = createSelector(
  selectLeerlingState,
  getLeerling
);

export const selectGeselecteerd: MemoizedSelector<object, number> = createSelector(
  selectLeerlingState,
  getGeselecteerd
);

export const selectScores: MemoizedSelector<object, Score[]> = createSelector(
  selectLeerlingState,
  getScores
);

export const selectOuders: MemoizedSelector<object, Ouder[]> = createSelector(
  selectLeerlingState,
  getOuders
);

export const selectHistorie: MemoizedSelector<object, LeerlingHistorieRecord[]> = createSelector(
  selectLeerlingState,
  getHistorie
);

export const selectNotities: MemoizedSelector<object, Notitie[]> = createSelector(
  selectLeerlingState,
  getNotities
);

export const selectNotitieFormZichtbaar: MemoizedSelector<object, boolean> = createSelector(
  selectLeerlingState,
  getNotitieFormZichtbaar
);

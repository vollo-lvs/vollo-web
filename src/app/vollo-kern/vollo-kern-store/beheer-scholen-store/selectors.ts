import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';
import { Score } from '../../common/model/score.model';
import { School } from '../../common/model/school.model';

const getSchool = (state: State): any => state.school;

const getGeselecteerd = (state: State): any => state.geselecteerd;

const getScholen = (state: State): any => state.scholen;

export const selectBeheerScholenState: MemoizedSelector<object, State> = createFeatureSelector<
  State
>('beheerScholen');

export const selectSchool: MemoizedSelector<object, School> = createSelector(
  selectBeheerScholenState,
  getSchool
);

export const selectGeselecteerd: MemoizedSelector<object, number> = createSelector(
  selectBeheerScholenState,
  getGeselecteerd
);

export const selectScholen: MemoizedSelector<object, Score[]> = createSelector(
  selectBeheerScholenState,
  getScholen
);

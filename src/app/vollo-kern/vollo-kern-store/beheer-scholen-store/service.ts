import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { VolloKernState } from '..';
import * as beheerScholenActions from './actions';
import { School } from '../../common/model/school.model';
import * as BeheerScholenStoreSelectors from './selectors';

@Injectable()
export class BeheerScholenStoreService {
  school$ = this.store.pipe(select(BeheerScholenStoreSelectors.selectSchool));
  geselecteerd$ = this.store.pipe(select(BeheerScholenStoreSelectors.selectGeselecteerd));
  scholen$ = this.store.pipe(select(BeheerScholenStoreSelectors.selectScholen));

  constructor(private store: Store<VolloKernState.State>) {}

  selecteren(id: number) {
    this.store.dispatch(new beheerScholenActions.SelecterenAction(id));
  }

  ophalen() {
    this.store.dispatch(new beheerScholenActions.OphalenAction());
  }

  deselecteren() {
    this.store.dispatch(new beheerScholenActions.DeselecterenAction());
  }

  ophalenSchool(id: number) {
    this.store.dispatch(new beheerScholenActions.OphalenSchoolAction(id));
  }

  opslaanSchool(schoolId: number, school: School) {
    this.store.dispatch(new beheerScholenActions.OpslaanSchoolAction(schoolId, school));
  }
}

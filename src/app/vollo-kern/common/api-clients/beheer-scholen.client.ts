import * as beheerScholenActions from '../../vollo-kern-store/beheer-scholen-store/actions';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { School } from '../model/school.model';

export function ophalenScholen(action: beheerScholenActions.OphalenAction, http: HttpClient) {
  return http.get<School[]>('/api/school/').pipe(
    map(scholen => new beheerScholenActions.OphalenSuccesAction(scholen)),
    catchError(error => observableOf(new beheerScholenActions.OphalenMisluktAction(error)))
  );
}

export function ophalenSchool(action: beheerScholenActions.OphalenSchoolAction, http: HttpClient) {
  return http.get<School>(`/api/school/${action.id}`).pipe(
    map(school => new beheerScholenActions.OphalenSchoolSuccesAction(school)),
    catchError(error => observableOf(new beheerScholenActions.OphalenSchoolMisluktAction(error)))
  );
}

export function opslaanSchool(action: beheerScholenActions.OpslaanSchoolAction, http: HttpClient) {
  return http.post<School>(`/api/school/${action.schoolId}`, action.school).pipe(
    map(school => new beheerScholenActions.OpslaanSchoolSuccesAction(school)),
    catchError(error => observableOf(new beheerScholenActions.OpslaanSchoolMisluktAction(error)))
  );
}

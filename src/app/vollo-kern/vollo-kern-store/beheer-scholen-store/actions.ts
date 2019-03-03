import { Action } from '@ngrx/store';
import { ErrorAction } from '../../common/error-action.model';
import { HttpErrorResponse } from '@angular/common/http';
import { School } from '../../common/model/school.model';

export enum ActionTypes {
  SELECTEREN = '[vollo.kern.beheer-scholen] Selecteren',
  DESELECTEREN = '[vollo.kern.beheer-scholen] Deselecteren',
  OPHALEN = '[vollo.kern.beheer-scholen] Ophalen',
  OPHALEN_SUCCES = '[vollo.kern.beheer-scholen] Ophalen succes',
  OPHALEN_MISLUKT = '[vollo.kern.beheer-scholen] Ophalen mislukt',
  OPHALEN_SCHOOL = '[vollo.kern.beheer-scholen] Ophalen school',
  OPHALEN_SCHOOL_SUCCES = '[vollo.kern.beheer-scholen] Ophalen school succes',
  OPHALEN_SCHOOL_MISLUKT = '[vollo.kern.beheer-scholen] Ophalen school mislukt',
  OPSLAAN_SCHOOL = '[vollo.kern.beheer-scholen] Opslaan school',
  OPSLAAN_SCHOOL_SUCCES = '[vollo.kern.beheer-scholen] Opslaan school succes',
  OPSLAAN_SCHOOL_MISLUKT = '[vollo.kern.beheer-scholen] Opslaan school mislukt'
}

export class SelecterenAction implements Action {
  readonly type = ActionTypes.SELECTEREN;
  constructor(public id: number) {}
}

export class DeselecterenAction implements Action {
  readonly type = ActionTypes.DESELECTEREN;
  constructor() {}
}

export class OphalenAction implements Action {
  readonly type = ActionTypes.OPHALEN;
  constructor() {}
}

export class OphalenSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_SUCCES;
  constructor(public scholen: School[]) {}
}

export class OphalenMisluktAction extends ErrorAction {
  readonly type = ActionTypes.OPHALEN_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
}

export class OphalenSchoolAction implements Action {
  readonly type = ActionTypes.OPHALEN_SCHOOL;
  constructor(public id: number) {}
}

export class OphalenSchoolSuccesAction implements Action {
  readonly type = ActionTypes.OPHALEN_SCHOOL_SUCCES;
  constructor(public school: School) {}
}

export class OphalenSchoolMisluktAction extends ErrorAction {
  readonly type = ActionTypes.OPHALEN_SCHOOL_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
}

export class OpslaanSchoolAction implements Action {
  readonly type = ActionTypes.OPSLAAN_SCHOOL;
  constructor(public schoolId: number, public school: School) {}
}

export class OpslaanSchoolSuccesAction implements Action {
  readonly type = ActionTypes.OPSLAAN_SCHOOL_SUCCES;
  constructor(public school: School) {}
}

export class OpslaanSchoolMisluktAction extends ErrorAction {
  readonly type = ActionTypes.OPSLAAN_SCHOOL_MISLUKT;
  constructor(public fout: HttpErrorResponse) {
    super();
  }
}

export type Actions =
  | SelecterenAction
  | DeselecterenAction
  | OphalenAction
  | OphalenSuccesAction
  | OphalenMisluktAction
  | OphalenSchoolAction
  | OphalenSchoolSuccesAction
  | OphalenSchoolMisluktAction
  | OpslaanSchoolAction
  | OpslaanSchoolSuccesAction
  | OpslaanSchoolMisluktAction;

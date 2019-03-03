import { AuthenticatieStoreState } from './authenticatie-store';
import { BeheerScholenStoreState } from './beheer-scholen-store';
import { MijnGroepenStoreState } from './mijn-groepen-store';
import { GroepStoreState } from './groep-store';
import { LeerlingStoreState } from './leerling-store';
import { UiStoreState } from './ui-store';
import { ScoreStoreState } from './score-store';

export interface State {
  authenticatie: AuthenticatieStoreState.State;
  beheerScholen: BeheerScholenStoreState.State;
  mijnGroepen: MijnGroepenStoreState.State;
  groep: GroepStoreState.State;
  leerling: LeerlingStoreState.State;
  score: ScoreStoreState.State;
  ui: UiStoreState.State;
}

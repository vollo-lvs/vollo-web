import { DomeinObject } from '../domein-object.model';
import { Adres } from './adres.model';

export class School extends DomeinObject {
  _type = 'SCHOOL';
  naam: string;
  adres?: Adres;
  hoortBij?: School;
  bijbehorendeScholen?: School[];
}

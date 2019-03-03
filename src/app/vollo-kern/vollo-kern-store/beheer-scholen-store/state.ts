import { School } from '../../common/model/school.model';

export interface State {
  geselecteerd?: number;
  school?: School;
  scholen?: School[];
}

export const initialState: State = {
  geselecteerd: undefined,
  school: undefined,
  scholen: []
};

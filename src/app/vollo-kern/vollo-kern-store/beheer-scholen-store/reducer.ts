import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function beheerScholenReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.SELECTEREN:
      return {
        ...state,
        geselecteerd: action.id
      };
    case ActionTypes.DESELECTEREN:
      return {
        ...state,
        geselecteerd: undefined
      };
    case ActionTypes.OPHALEN:
      return state;
    case ActionTypes.OPHALEN_SUCCES:
      return {
        ...state,
        scholen: action.scholen
      };
    case ActionTypes.OPHALEN_MISLUKT:
      return {
        ...state,
        scholen: []
      };
    case ActionTypes.OPHALEN_SCHOOL:
      return state;
    case ActionTypes.OPHALEN_SCHOOL_SUCCES:
      return {
        ...state,
        school: action.school
      };
    case ActionTypes.OPHALEN_SCHOOL_MISLUKT:
      return {
        ...state,
        school: undefined
      };
    case ActionTypes.OPSLAAN_SCHOOL:
      return state;
    case ActionTypes.OPSLAAN_SCHOOL_SUCCES:
      const nieuweSchool = !state.scholen.find(school => school.id === action.school.id);
      return {
        ...state,
        scholen: nieuweSchool
          ? [action.school, ...state.scholen]
          : state.scholen.map(school => (school.id === action.school.id ? action.school : school))
      };
    case ActionTypes.OPSLAAN_SCHOOL_MISLUKT:
      return state;
    default: {
      return state;
    }
  }
}

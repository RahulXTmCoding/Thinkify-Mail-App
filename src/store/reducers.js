import * as actionType from "./actions";
export const initialState = {
  filter: 0,
  favorites: {},
  read: {},
  emails: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.MARKREAD:
      return {
        ...state,
        read: { ...state.read, [action.payload.id]: true },
      };
    case actionType.UPDATEFILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case actionType.MARKFAVORITE:
      return {
        ...state,
        favorites: { ...state.favorites, [action.payload.id]: true },
      };
    case actionType.UNMARKFAVORITE:
      return {
        ...state,
        favorites: { ...state.favorites, [action.payload.id]: false },
      };
    case actionType.FETCHMAILS:
      return {
        ...state,
        emails: action.payload.emails,
      };
    default:
      return state;
  }
};
export default reducer;

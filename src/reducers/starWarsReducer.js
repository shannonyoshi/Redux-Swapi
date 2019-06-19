import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";
const initialState = {
  characters: [],
  error: null,
  isLoading: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        characters: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: "This is not the page you seek",
        isLoading: false
      };
    default:
      return state;
  }
};

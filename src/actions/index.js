import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getChar = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`https://swapi.co/api/people`)
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data.results })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_ERROR });
    });
};

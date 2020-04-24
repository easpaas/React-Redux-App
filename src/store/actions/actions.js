import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: FETCHING_DATA });
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.drinks[0]});
    })
    .catch(error => {
      dispatch({ type: FETCH_ERROR, payload: error.response.message })
    })
  }
};
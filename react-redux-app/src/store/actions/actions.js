import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => {
  return dispatch => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => {
      dispatch({ type: FETCH_DATA, payload: response.data.drinks[0]});
    })
    .catch(error => {
      console.log(error.response)
    })
  }
};
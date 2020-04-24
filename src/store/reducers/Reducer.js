// import actions
import { FETCH_DATA_SUCCESS, FETCHING_DATA, FETCH_ERROR } from '../actions/actions';

export const initialState = {
  id: null,
  loading: false,
  name: '', 
  img_url: '', 
  category: '', 
  glass: '',
  error: '',
}

export const drinkReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_DATA: 
      return {
        ...state, 
        loading: true
      }
    case FETCH_DATA_SUCCESS: 
      return {
        ...state, 
        id: action.payload.idDrink,
        name: action.payload.strDrink, 
        img_url: action.payload.strDrinkThumb, 
        category: action.payload.strCategory,
        glass: action.payload.strGlass
      }
      case FETCH_ERROR: 
      return {
        ...state, 
        error: action.payload

      }
    default:
      return state;
  }
}
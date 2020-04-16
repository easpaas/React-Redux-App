// import actions
import { FETCH_DATA } from '../actions/actions';

export const initialState = {
  id: null,
  name: '', 
  img_url: '', 
  category: '', 
  glass: ''
}

export const drinkReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA: 
    console.log('fetch data success', action.payload)
      return {
        ...state, 
        id: action.payload.idDrink,
        name: action.payload.strDrink, 
        img_url: action.payload.strDrinkThumb, 
        category: action.payload.strCategory,
        glass: action.payload.strGlass
      }
    default:
      return state;
  }
}
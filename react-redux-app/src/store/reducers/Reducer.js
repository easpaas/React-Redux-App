// import actions
import { FETCH_DATA } from '../actions/actions';

export const initialState = {
  id: null,
  name: '', 
  img_url: '', 
  category: '', 
  glass: ''
}

export const Reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
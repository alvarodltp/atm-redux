import { GET_EXPENSES } from '../actions/types';

const initialState = {
  data: [],
  loading: true,
  error: {},
  currentBalance: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type){
    case GET_EXPENSES:
      return {
        ...state,
        data: payload,
        loading: false
      }
    default:
      return state;
  }
};

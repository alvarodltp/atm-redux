import { GET_EXPENSES } from './types';
import jsonData from '../apis/jsonData';

export const getExpenses = () => async dispatch => {
  const res = await jsonData.get('');
  dispatch({
    type: GET_EXPENSES,
    payload: res.data
  });
};

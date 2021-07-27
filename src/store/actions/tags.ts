import api from '../../libs/api/main-api';
import { FETCH_TAGS } from '../actionTypes';

export function fetchTags() {
  return function (dispatch: any) {
    try {
      api.getAllTags().then((response) => {
        dispatch({ type: FETCH_TAGS, payload: response.data });
      });
    } catch (e) {
      console.log(e);
    }
  };
}

import api from '../../libs/api/main-api';
import {
  FETCH_TAGS_FAILURE,
  FETCH_TAGS_START,
  FETCH_TAGS_SUCCESS,
} from '../actionTypes';

export function fetchTags() {
  return async function (dispatch: any) {
    dispatch({ type: FETCH_TAGS_START });

    try {
      const response = await api.getAllTags();

      if (response.data) {
        dispatch({ type: FETCH_TAGS_SUCCESS, payload: response.data });
      }
    } catch (e) {
      dispatch({ type: FETCH_TAGS_FAILURE, payload: e.response.data });
    }
  };
}

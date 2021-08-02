import { IParams } from '../../interfaces';
import api from '../../libs/api/main-api';
import {
  FETCH_DAPPLETS_FAILURE,
  FETCH_DAPPLETS_START,
  FETCH_DAPPLETS_SUCCESS,
  FETCH_MORE_DAPPLETS_FAILURE,
  FETCH_MORE_DAPPLETS_START,
  FETCH_MORE_DAPPLETS_SUCCESS,
  ON_DRAG_END,
} from '../actionTypes';

export function fetchDapplets(params: IParams) {
  return async function (dispatch: any) {
    dispatch({ type: FETCH_DAPPLETS_START });

    try {
      const response = await api.getDapplets(params);

      if (response.data) {
        dispatch({ type: FETCH_DAPPLETS_SUCCESS, payload: response.data });
      }
    } catch (e) {
      dispatch({ type: FETCH_DAPPLETS_FAILURE, payload: e.response.data });
      if (e.response.status === 500) {
        dispatch(fetchDapplets(params));
      }
    }
  };
}

export function fetchMoreDapplets(params: IParams) {
  return async function (dispatch: any) {
    dispatch({ type: FETCH_MORE_DAPPLETS_START });

    try {
      const response = await api.getDapplets(params);

      if (response.data) {
        dispatch({ type: FETCH_MORE_DAPPLETS_SUCCESS, payload: response.data });
      }
    } catch (e) {
      dispatch({ type: FETCH_MORE_DAPPLETS_FAILURE, payload: e.response.data });
      if (e.response.status === 500) {
        dispatch(fetchMoreDapplets(params));
      }
    }
  };
}

export function onDragEnd(source: number, destination: number) {
  return {
    type: ON_DRAG_END,
    payload: {
      source,
      destination,
    },
  };
}

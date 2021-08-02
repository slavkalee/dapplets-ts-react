import { AnyAction } from 'redux';
import { IDappletState } from '../../interfaces';
import {
  FETCH_DAPPLETS_FAILURE,
  FETCH_DAPPLETS_START,
  FETCH_DAPPLETS_SUCCESS,
  FETCH_MORE_DAPPLETS_FAILURE,
  FETCH_MORE_DAPPLETS_START,
  FETCH_MORE_DAPPLETS_SUCCESS,
  ON_DRAG_END,
} from '../actionTypes';

const initialState: IDappletState = {
  data: [],
  loading: false,
  errors: null,
  success: false,
  total: 0,
  isFirstCall: true,
};

export const dappletReducer = (
  state: IDappletState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FETCH_DAPPLETS_START:
      return { ...state, loading: true };
    case FETCH_DAPPLETS_SUCCESS:
      const isFirstCall = !!state.data.length;
      return {
        ...state,
        loading: false,
        errors: null,
        data: [...action.payload.data],
        success: action.payload.success,
        total: action.payload.total,
        isFirstCall,
      };
    case FETCH_DAPPLETS_FAILURE:
      return { ...state, loading: false, errors: action.payload };
    case FETCH_MORE_DAPPLETS_START:
      return { ...state, loading: true };
    case FETCH_MORE_DAPPLETS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        data: [...state.data, ...action.payload.data],
        success: action.payload.success,
        total: action.payload.total,
      };
    case FETCH_MORE_DAPPLETS_FAILURE:
      return { ...state, loading: false, errors: action.payload };
    case ON_DRAG_END:
      const { source, destination } = action.payload;
      const item = state.data[source];

      state.data.splice(source, 1);
      state.data.splice(destination, 0, item);

      return state;
    default:
      return state;
  }
};

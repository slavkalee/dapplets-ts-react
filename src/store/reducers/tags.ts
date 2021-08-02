import { AnyAction } from 'redux';
import { ITagState } from '../../interfaces';
import {
  FETCH_TAGS_FAILURE,
  FETCH_TAGS_START,
  FETCH_TAGS_SUCCESS,
} from '../actionTypes';

const initialState = {
  data: [],
  loading: false,
  errors: null,
  success: false,
};

export const tagReducer = (
  state: ITagState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FETCH_TAGS_START:
      return { ...state, loading: true };
    case FETCH_TAGS_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case FETCH_TAGS_FAILURE:
      return { ...state, errors: action.payload, loading: false };
    default:
      return state;
  }
};

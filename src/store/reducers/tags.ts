import { FETCH_TAGS } from '../actionTypes';

const initialState = {
  tags: [],
};

export const tagReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TAGS:
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

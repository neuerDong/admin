/**
 * External dependencies
 */
import * as types from './constants';

const initialState = {
  data: [],
  loading: true,
  error: false,
};

export function ArticleReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ARTICLE:
      return {
        ...state,
        id: action.id,
        loading: true,
      };

    case types.GET_ARTICLE_SUC:
      return {
        ...state,
        id: action.id,
        loading: false,
        data: action.data,
      };
    case types.GET_ARTICLE_ERR:
      return {
        ...state,
        id: action.id,
        loading: false,
        err: action.err,
      };

    default:
      return state;
  }
}

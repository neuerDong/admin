/**
 * External dependencies
 */
import * as types from './constants';

const initialState = {
  data: [],
  loading: true,
  error: false,
};

export default function ArticleListReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ARTICLE_LIST:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_ARTICLE_LIST_SUC:
      return {
        ...state,
        loading: false,
        data: action.data,
      };

    case types.LOAD_ARTICLE_LIST_ERR:
      return {
        ...state,
        loading: false,
        err: action.err,
      };

    default:
      return state;
  }
}

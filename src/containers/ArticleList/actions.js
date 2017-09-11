import * as types from './constants';
import { get } from '../../utils/request';

export function loadArticleList() {
  return (dispatch) => {
    dispatch({
      type: types.LOAD_ARTICLE_LIST,
    });

    get('article_list').then((data) => {
      dispatch(loadArticleListSuc(data));
    }, (err) => {
      dispatch(loadArticleListErr(err));
    });
  };
}

export function loadArticleListSuc(data) {
  return {
    type: types.LOAD_ARTICLE_LIST_SUC,
    data,
  };
}

export function loadArticleListErr(err) {
  return {
    type: types.LOAD_ARTICLE_LIST_ERR,
    err,
  };
}

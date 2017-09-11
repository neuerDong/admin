import * as types from './constants';
import { get } from '../../utils/request';

export function getArticle(id) {
  return (dispatch) => {
    dispatch({
      type: types.GET_ARTICLE,
      id,
    });

    get(`article${id}`).then((data) => {
      dispatch(getArticleSuc(id, data));
    }, (err) => {
      dispatch(getArticleErr(id, err));
    });
  };
}

export function getArticleSuc(id, data) {
  return {
    type: types.GET_ARTICLE_SUC,
    id,
    data,
  };
}

export function getArticleErr(id, err) {
  return {
    type: types.GET_ARTICLE_ERR,
    id,
    err,
  };
}

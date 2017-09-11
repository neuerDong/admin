/**
 * External dependencies
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { ArticleReducer } from '../containers/ArticleDetail/reducer';
import ArticleListReducer from '../containers/ArticleList/reducer';

export default combineReducers({
  routerReducer,
  article: ArticleReducer,
  articleList: ArticleListReducer,
});

import React from 'react';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';

import Frame from '../containers/Frame';
import ArticleList from '../containers/ArticleList';
import Article from '../containers/ArticleDetail';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Frame}>
      <IndexRoute component={ArticleList} />
      <Route path="article/:id" component={Article} />
    </Route>
  </Router>
);

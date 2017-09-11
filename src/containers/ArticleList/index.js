import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadArticleList } from './actions';

class ArticleList extends Component {
  componentDidMount() {
    this.props.loadArticleList();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.data.map(item =>
            (<li key={item.id}>
              <div>
                <h3><Link to={`/article/${item.id}`}>{item.title}</Link></h3>
              </div>
              <div>
                  [{item.time}]
              </div>
              <br />
            </li>),
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.articleList.loading,
  data: state.articleList.data,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadArticleList: () => dispatch(loadArticleList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticle } from './actions';

class Article extends Component {
  propTypes = {
    loading: React.PropTypes.string,
    getArticle: React.PropTypes.func,
    params: React.PropTypes.string,
    data: React.PropTypes.obj,
  };

  componentDidMount() {
    this.props.getArticle(this.props.params.id);
  }

  render() {
    if (this.props.loading) {
      return (
        <h2>Loading</h2>
      );
    }
    return (
      <div>
        <h2>标题：{this.props.data.title}</h2>
        <p>内容：{this.props.data.content}</p>
        <div>时间：{this.props.data.time}</div>
        <hr />
        <h3>评论：</h3>
        <ul>
          {this.props.data.comments && this.props.data.comments.map((item, index) =>
            (<li key={index}>
              <div>
                <p>昵称：{item.name}</p>
                <div>邮箱：{item.email}</div>
                <p>内容：{item.content}</p>
              </div>
            </li>),
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.article.loading,
  data: state.article.data,
});

const mapDispatchToProps = dispatch => ({
  getArticle: id => dispatch(getArticle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);

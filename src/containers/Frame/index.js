/**
 * External dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Icon, Layout, Breadcrumb } from 'antd';
import './styles.less';

class Frame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
    this.siderToggle = this.siderToggle.bind(this);
  }

  siderToggle() {
    debugger;
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { Header, Sider, Content } = Layout;
    const { Item } = Menu;

    return (
      <div className="main_layout">
        <Layout style={{ height: '100vh' }}>
          <Sider
            style={{ overflow: 'auto' }}
            trigger={null}
            collapsed={this.state.collapsed}
          >
            <div className="logo">
              <Link to="/">{this.state.logoText}</Link>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Item key="appstore-o">
                <Icon type="appstore-o" />
                <span>项目管理</span>
              </Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="header">
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.siderToggle}
              />
            </Header>

            <div className="breadcrumb">
              <Breadcrumb
                routes={this.props.routes}
                params={this.props.children
                  ? this.props.children.props.location.state
                  : {}}
              />
            </div>

            <Content className="content" />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Frame;

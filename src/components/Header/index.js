import React from 'react';
import { Layout, Icon } from 'antd';

function Header(props) {
  const { Header } = Layout;

  return (
    <Header className="header">
      <Icon
        className="trigger"
        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={this.toggle}
      />
    </Header>
  );
}

export default Header;

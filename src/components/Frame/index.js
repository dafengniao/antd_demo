import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import {
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreOutlined
} from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import './index.less'
const { SubMenu } = Menu
const { Header, Sider, Content } = Layout

@withRouter
class Frame extends Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  goRouter = ({ key }) => {
    this.props.history.push({
      pathname: key
    })
  }


  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultOpenKeys={[this.props.location.pathname.substr(0, this.props.location.pathname.lastIndexOf('/'))]} selectedKeys={[this.props.location.pathname]} style={{height: '100%'}} onClick={this.goRouter}>
            {
              this.props.menu.map((item) => {
                return (
                  !item.children
                  ?
                  <Menu.Item key={item.pathname}>
                    <AppstoreOutlined />
                    <span>{item.title}</span>
                  </Menu.Item>
                  :
                  <SubMenu
                    key={item.key}
                    title={
                      <span>
                        <MailOutlined />
                        <span>{item.title}</span>
                      </span>
                    }>
                    {
                      item.children.map((children) => {
                        return (
                          children.isNav
                          ?
                          <Menu.Item key={children.pathname}>{children.title}</Menu.Item>
                          :
                          ''
                        )
                      })
                    }
                  </SubMenu>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Frame

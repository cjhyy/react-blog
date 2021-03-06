import * as React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../css/Sider.less';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
export default function Home() {
  const [collapsed, onCollapse] = React.useState(false);
  return (
    <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={broken => {
          console.log(broken);
        }}
        collapsed={collapsed}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
          <Menu.Item key='1'>
            <UserOutlined />
            <span className='nav-text'>nav 1</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <VideoCameraOutlined />
            <span className='nav-text'>nav 2</span>
          </Menu.Item>
          <Menu.Item key='3'>
            <UploadOutlined />
            <span className='nav-text'>nav 3</span>
          </Menu.Item>
          <Menu.Item key='4'>
            <UserOutlined />
            <span className='nav-text'>nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className='site-layout-sub-header-background' style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

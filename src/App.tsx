import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Dashboard from './pages/dashboard';
import Userinfo from './pages/userinfo';
import './style.less';

const {
  Header, Footer, Content,
} = Layout;

const App = () => (
  <Router>
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="dashboard">
            <Link to="/dashboard">dashboard</Link>
          </Menu.Item>
          <Menu.Item key="userinfo">
            <Link to="/userinfo">userinfo</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <Switch>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route path="/userinfo"><Userinfo /></Route>
        </Switch>
      </Content>
      <Footer />
    </Layout>
  </Router>
);

export default App;

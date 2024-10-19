import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  UserOutlined,
  TeamOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { RecoilRoot } from "recoil";
import User from "./user";
import BFoo from "./bFoo";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <React.StrictMode>
      <RecoilRoot>
        <Router>
          <Layout title="AI YiShow" navTheme="dark" location={location}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="demo-logo-vertical" />
              <SideMenu />
            </Sider>
            <Layout>
              <Header>
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: () => setCollapsed(!collapsed),
                    style: {
                      fontSize: "18px",
                      padding: "0 24px",
                      cursor: "pointer",
                    },
                  }
                )}
              </Header>
              <Content>
                <Routes>
                  <Route path="/user" element={<User />} />
                  <Route path="/bFoo" element={<BFoo />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Router>
      </RecoilRoot>
    </React.StrictMode>
  );
}

function SideMenu() {
  const location = useLocation();
  const items = [
    {
      key: "/users",
      icon: <UserOutlined />,
      label: <Link to="/users">用户管理</Link>,
    },
    {
      key: "/classes",
      icon: <TeamOutlined />,
      label: <Link to="/classes">班级管理</Link>,
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["/"]}
      selectedKeys={[location.pathname]}
      items={items}
    />
  );
}

export default App;

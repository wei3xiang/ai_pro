import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { RecoilRoot } from "recoil";
import User from "./user";
import BFoo from "./bFoo";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <React.StrictMode>
      <RecoilRoot>
        <Router>
          <Layout>
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
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
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
      key: "/user",
      label: <Link to="/user">user</Link>,
    },
    {
      key: "/bFoo",
      label: <Link to="/bFoo">bFoo</Link>,
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["/user"]}
      selectedKeys={[location.pathname]}
      items={items}
    />
  );
}

export default App;

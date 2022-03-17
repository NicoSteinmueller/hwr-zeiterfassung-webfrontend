import React from "react";
import AppContent from "./layout/AppContent";
import AppFooter from "./layout/AppFooter";
import AppHeader from "./layout/AppHeader";
import AppSider from "./layout/AppSider";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Layout>
        <Content>
          <AppContent />
        </Content>
        <Sider>
          <AppSider />
        </Sider>
      </Layout>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;

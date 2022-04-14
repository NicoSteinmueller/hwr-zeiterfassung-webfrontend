import AppContent from "../layout/AppContent";
import AppFooter from "../layout/AppFooter";
import AppHeader from "../layout/AppHeader";
import AppSider from "../layout/AppSider";
import { Layout } from "antd";
import classes from "../layout/Layout.module.css";

const { Header, Footer, Sider, Content } = Layout;

function User() {
  return (
    <div>
      <AppHeader />
      <AppContent />
      <AppSider />
      <AppFooter />
    </div>

    // <Layout className={classes.mainlayout}>
    //   <Header>
    //     <AppHeader />
    //   </Header>
    //   <Layout>
    //     <Content>
    //       <AppContent />
    //     </Content>
    //     <Sider>
    //       <AppSider />
    //     </Sider>
    //   </Layout>
    //   <Footer>
    //     <AppFooter />
    //   </Footer>
    // </Layout>
  );
}

export default User;

import { Content } from "antd/es/layout/layout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Content>{children}</Content>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

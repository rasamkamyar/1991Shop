import { Footer, Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

interface Props {
  children: any;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header>
        <Link to={"./"}> 1991</Link>
      </Header>
      {children}
      <Footer>bye</Footer>
    </>
  );
};

export default Layout;

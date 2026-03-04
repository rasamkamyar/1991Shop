import { Footer, Header } from "antd/es/layout/layout";
import React, { Children } from "react";


interface Props {
    children:any
}
const Layout = ({ children }:Props) => {
  return (
    <>
      <Header>hii</Header>
      {children}
      <Footer>bye</Footer>
    </>
  );
};

export default Layout;

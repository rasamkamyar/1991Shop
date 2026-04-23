import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Badge, Layout } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Header } = Layout;

function AppHeader() {
  const count = 4;
  return (
    <Header className={styles.customHeader}>
      <Link to={"/"} className={styles.title}>
        1991
      </Link>
      <nav className={styles.navigation}>
        <Link to="/products" className={styles.link}>
          Products
        </Link>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
        <Link to="/chechout">
          <Badge count={count} offset={[-18, -2]} color="#4b5563">
            <ShoppingCartOutlined className={styles.shoppingIcon} />
          </Badge>
        </Link>
      </nav>
    </Header>
  );
}

export default AppHeader;

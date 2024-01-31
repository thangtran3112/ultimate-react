import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

/**
 * <Outlet/> JSX element will be subsituted by the Nested Route, created in React Router
 *  */
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;

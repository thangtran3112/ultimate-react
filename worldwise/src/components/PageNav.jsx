import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
/**
 *
 * Using <NavLink> instead of <Link> will show class="active" for selected link
 */
function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

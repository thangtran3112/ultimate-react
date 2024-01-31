import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

/*
 * NavLink will be rendered as <a class='active'>
 * It will be styled by the global declared CSS as of ".nav a:global(.active)"
 * Cities and Countries can also be implemented by using <Tab> components and useState()
 */
function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;

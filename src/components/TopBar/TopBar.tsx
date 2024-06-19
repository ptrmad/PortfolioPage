import { NavLink } from "react-router-dom";
import { MyName } from "../MyName/MyName";
import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <NavLink className={styles.navItem} to="home">
        <MyName />
      </NavLink>
      <div className={styles.navSection}>
        <NavLink className={styles.navItem} to="home">
          Home
        </NavLink>
        <NavLink className={styles.navItem} to="portfolio">
          Portfolio
        </NavLink>
        <NavLink className={styles.navItem} to="cv">
          CV
        </NavLink>
        <NavLink className={styles.navItem} to="contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

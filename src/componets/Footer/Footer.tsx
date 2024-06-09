import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { MyName } from "../MyName/MyName";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <MyName />
        <p>Front-End Developer</p>
      </div>
      <div>
        <ul>piotr.m.drozdzal@gmail.com</ul>
      </div>
      <div className={styles.footerSection}>
        <NavLink className={styles.footerItem} to="home">
          Home
        </NavLink>
        <NavLink className={styles.footerItem} to="portfolio">
          Portfolio
        </NavLink>
        <Link className={styles.footerItem} to="portfolio">
          GitHub
        </Link>
        <NavLink className={styles.footerItem} to="cv">
          CV
        </NavLink>
        <NavLink className={styles.footerItem} to="contact">
          Contact
        </NavLink>
      </div>
      <div>
        <a href="#top">Back to the top ^</a>
      </div>
    </div>
  );
}

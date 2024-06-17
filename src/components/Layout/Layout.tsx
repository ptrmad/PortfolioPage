import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";

import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className={styles.layout}>
      <TopBar />
      <Outlet />
      <Footer />
    </div>
  );
}

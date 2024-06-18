import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";

import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

export function Layout() {
  const techContext = useContext(TechContext);

  return (
    <TechContext.Provider value={techContext}>
      <div className={styles.layout}>
        <TopBar />
        <Outlet />
        <Footer />
      </div>
    </TechContext.Provider>
  );
}

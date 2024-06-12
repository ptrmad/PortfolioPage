import { ReactNode } from "react";
import styles from "./H2.module.css";

interface H2Props {
  children: ReactNode;
}

export function H2({ children }: H2Props) {
  return <h2 className={styles.h2}>{children}</h2>;
}

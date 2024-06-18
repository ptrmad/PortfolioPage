import { Link } from "react-router-dom";
import { H2 } from "../H2/H2";
import styles from "./Error.module.css";

export function Error() {
  return (
    <div className={styles.error}>
      <H2>WHOOPS!</H2>
      <p>Something went wrong!</p>
      <Link to="/home">Home</Link>
    </div>
  );
}

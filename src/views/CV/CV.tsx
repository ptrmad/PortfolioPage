import { Certificate } from "../../componets/Certificate/Certificate";
import styles from "./CV.module.css";

export function CV() {
  return (
    <div className={styles.cv}>
      <h2>My CV</h2>
      <iframe src="https://drive.google.com/file/d/1u4XFEI6mbXT0mGIV5MWWsBle1ovvoJwG/preview"></iframe>
      <h2>My Certificates</h2>
      <Certificate />
      <Certificate />
      <Certificate />
    </div>
  );
}

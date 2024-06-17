// import { Certificate } from "../../componets/Certificate/Certificate";
import { H2 } from "../../componets/H2/H2";
import styles from "./CV.module.css";

export function CV() {
  return (
    <div className={styles.cv}>
      <H2>CV</H2>
      <iframe src="https://drive.google.com/file/d/1u4XFEI6mbXT0mGIV5MWWsBle1ovvoJwG/preview"></iframe>
      {/* <H2>Certificates</H2>
      <Certificate />
      <Certificate />
      <Certificate /> */}
    </div>
  );
}

// import { Certificate } from "../../componets/Certificate/Certificate";
import { H2 } from "../../components/H2/H2";
import { SlideInWrapper } from "../../components/SlideInWrapper/SlideInWrapper";
import styles from "./CV.module.css";

export function CV() {
  return (
    <div className={styles.cv}>
      <SlideInWrapper>
        <H2>CV</H2>
        <iframe src="https://drive.google.com/file/d/1djxp5Uz1pozbE2q8jO_lhjB9C-jOzLq0/preview"></iframe>
      </SlideInWrapper>
      {/* <H2>Certificates</H2>
      <Certificate />
      <Certificate />
      <Certificate /> */}
    </div>
  );
}

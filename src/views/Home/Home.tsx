import { H2 } from "../../components/H2/H2";
import { MyName } from "../../components/MyName/MyName";
import { TechStack } from "../../components/TechStack/TechStack";
import styles from "./Home.module.css";
import ME from "../../assets/profilePic.jpeg";
import { SlideInWrapper } from "../../components/SlideInWrapper/SlideInWrapper";

export function Home() {
  return (
    <div className={styles.home}>
      <SlideInWrapper>
        <div className={styles.myPhotoContainer}>
          <div className={styles.inner}>
            <img className={styles.myPhoto} src={ME} alt="my photo" />
          </div>
        </div>
      </SlideInWrapper>
      <div className={styles.heading}>
        <h1>
          <SlideInWrapper>
            <MyName />
          </SlideInWrapper>
        </h1>
      </div>
      <div className={styles.text}>
        <SlideInWrapper>
          <p>
            I'm a curious front-end developer eager for new challenges and
            opportunities to grow. Let's work together!
          </p>
        </SlideInWrapper>
      </div>
      <TechStack />
      <div className={styles.text}>
        <SlideInWrapper>
          <H2>About Me</H2>
          <p>
            My coding journey began in 2022 when I completed my first course on
            responsive web design from FreeCodeCamp. After that, I dove straight
            into learning JavaScript and continued with React. My goal is to
            create eye-catching, immersive websites and web apps that provide
            outstanding user experiences. I work with HTML, CSS, JavaScript, and
            React. On this page, you'll find all the information you need to
            start collaborating with me!
          </p>
        </SlideInWrapper>
      </div>
    </div>
  );
}

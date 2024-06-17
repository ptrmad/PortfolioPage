import { H2 } from "../../componets/H2/H2";
import { MyName } from "../../componets/MyName/MyName";
import { TechStack } from "../../componets/TechStack/TechStack";
import styles from "./Home.module.css";
import ME from "../../assets/profilePic.jpeg";

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.myPhotoContainer}>
        <div className={styles.inner}>
          <img className={styles.myPhoto} src={ME} alt="my photo" />
        </div>
      </div>
      <div className={styles.heading}>
        <h1>
          <MyName />
        </h1>
      </div>
      <div className={styles.text}>
        <p>
          I'm a curious front-end developer eager for new challenges and
          opportunities to grow. Let's work together!
        </p>
      </div>
      <TechStack />
      <div className={styles.text}>
        <H2>About Me</H2>
        <p>
          My coding journey began in 2022 when I completed my first course on
          responsive web design from FreeCodeCamp. After that, I dove straight
          into learning JavaScript and continued with React. My goal is to
          create eye-catching, immersive websites and web apps that provide
          outstanding user experiences. I work with HTML, CSS, JavaScript, and
          React. On this page, you'll find all the information you need to start
          collaborating with me!
        </p>
      </div>
    </div>
  );
}

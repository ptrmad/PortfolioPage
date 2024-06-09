import { MyName } from "../../componets/MyName/MyName";
import { TechStack } from "../../componets/TechStack/TechStack";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.home}>
      <div>
        <img
          className={styles.myPhoto}
          src="https://i.pinimg.com/originals/f4/cc/df/f4ccdf7a94e65ddf11f1cdfe7589dc5e.png"
          alt="my photo"
        />
      </div>
      <div>
        <MyName />
      </div>
      <div>
        <p>
          I'm a curious front-end developer looking for the new challenges and
          opportunities to grow. Let's work together!
        </p>
      </div>
      <TechStack />
      <div>Page description</div>
      <div>
        <p>
          This page is about me and I am the most fantastic. My Journey in
          coding started in 2022, when I took my first course on responsive web
          design from FreeCodeCamp. After finishing I jumped right into learning
          javascript and continued this journey with learning React. My aim is
          to make eye-catching, immersive websites and webapps, that will give
          the users outstanding experiences. I use HTML/CSS, javaScript and
          React. Below you will find my
        </p>
      </div>
    </div>
  );
}

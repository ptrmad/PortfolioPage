import styles from "./TechStack.module.css";

import { SlideInWrapper } from "../SlideInWrapper/SlideInWrapper";
import { H2 } from "../H2/H2";
import { TechContext } from "../../contexts/TechContext";
import { useContext } from "react";

export function TechStack() {
  const techs = useContext(TechContext);

  return (
    <div className={styles.techStack}>
      <SlideInWrapper>
        <H2>My Tech Stack</H2>
      </SlideInWrapper>
      <div>
        <ul className={styles.techList}>
          {techs.map((tech) => (
            <SlideInWrapper>
              <li key={tech.name} className={styles.techItem}>
                {tech.icon}
                <span>{tech.name}</span>
              </li>
            </SlideInWrapper>
          ))}
        </ul>
      </div>
    </div>
  );
}

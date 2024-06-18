import styles from "./TechStack.module.css";
import { SlideInWrapper } from "../SlideInWrapper/SlideInWrapper";
import { H2 } from "../H2/H2";
import { TechContext } from "../../contexts/TechContext";
import { useContext } from "react";
import { TechItem } from "../TechItem/TechItem";

// Define the structure of tech items
interface Tech {
  name: string;
  icon: JSX.Element;
}

export function TechStack() {
  const techs: Tech[] = useContext(TechContext);

  return (
    <div className={styles.techStack}>
      <SlideInWrapper>
        <H2>My Tech Stack</H2>
      </SlideInWrapper>
      <div>
        <ul className={styles.techList}>
          {techs.map((tech) => (
            <TechItem isInProject={false} key={tech.name} tech={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
}

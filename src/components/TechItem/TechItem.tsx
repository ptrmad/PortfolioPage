import { SlideInWrapper } from "../SlideInWrapper/SlideInWrapper";
import styles from "./TechItem.module.css";

interface TechItemProps {
  tech: {
    name: string;
    icon: JSX.Element;
  };
  isInProject: boolean;
}

export function TechItem({ tech, isInProject }: TechItemProps) {
  return (
    <SlideInWrapper>
      <li
        key={tech.name}
        className={`${isInProject ? styles.techItemProject : styles.techItem}`}
      >
        <div
          className={`${
            isInProject ? styles.techIconProject : styles.techIcon
          }`}
        >
          {tech.icon}
        </div>
        <span>{tech.name}</span>
      </li>
    </SlideInWrapper>
  );
}

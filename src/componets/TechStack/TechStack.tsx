import styles from "./TechStack.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiVite,
  SiVisualstudiocode,
  SiReactrouter,
  SiReacthookform,
} from "react-icons/si";

export function TechStack() {
  const techs = [
    { name: "HTML", icon: <FaHtml5 className={styles.techIcon} /> },
    { name: "CSS", icon: <FaCss3Alt className={styles.techIcon} /> },
    { name: "CSS modules", icon: <FaCss3Alt className={styles.techIcon} /> },
    { name: "Bootstrap", icon: <FaBootstrap className={styles.techIcon} /> },
    { name: "Typescript", icon: <SiTypescript className={styles.techIcon} /> },
    { name: "React", icon: <FaReact className={styles.techIcon} /> },
    { name: "React hooks", icon: <FaReact className={styles.techIcon} /> },
    {
      name: "React hook form",
      icon: <SiReacthookform className={styles.techIcon} />,
    },
    {
      name: "Tanstack query",
      icon: <FaReact className={styles.techIcon} />,
    },
    {
      name: "React-router-dom",
      icon: <SiReactrouter className={styles.techIcon} />,
    },
    {
      name: "React-intersection-observer",
      icon: <FaReact className={styles.techIcon} />,
    },
    { name: "Vite", icon: <SiVite className={styles.techIcon} /> },
    { name: "Git", icon: <FaGitAlt className={styles.techIcon} /> },
    {
      name: "VSCode",
      icon: <SiVisualstudiocode className={styles.techIcon} />,
    },
  ];

  return (
    <div className={styles.techStack}>
      <h2>My Tech Stack</h2>
      <div>
        <ul className={styles.techList}>
          {techs.map((tech) => (
            <li key={tech.name} className={styles.techItem}>
              {tech.icon}
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

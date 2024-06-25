import { createContext } from "react";
import styles from "../components/TechStack/TechStack.module.css";
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
import { RiNextjsFill } from "react-icons/ri";

export const TechContext = createContext([
  { name: "HTML", icon: <FaHtml5 className={styles.techIcon} /> },
  { name: "CSS", icon: <FaCss3Alt className={styles.techIcon} /> },
  { name: "CSS modules", icon: <FaCss3Alt className={styles.techIcon} /> },
  { name: "Bootstrap", icon: <FaBootstrap className={styles.techIcon} /> },
  { name: "TypeScript", icon: <SiTypescript className={styles.techIcon} /> },
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
  {
    name: "Next.js",
    icon: <RiNextjsFill className={styles.techIcon} />,
  },
  { name: "Vite", icon: <SiVite className={styles.techIcon} /> },
  { name: "Git", icon: <FaGitAlt className={styles.techIcon} /> },
  {
    name: "VSCode",
    icon: <SiVisualstudiocode className={styles.techIcon} />,
  },
]);

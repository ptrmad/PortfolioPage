import { H2 } from "../../componets/H2/H2";
import { ProjectPreview } from "../../componets/ProjectPreview/ProjectPreview";
import styles from "./Portfolio.module.css";

interface Project {
  name: string;
  image: string;
  description: string;
}

export function Portfolio() {
  const projects: Project[] = [
    {
      name: "OliveHub",
      image:
        "https://raw.githubusercontent.com/ptrmad/OliveHub/main/images/screenshot.png",
      description: `A webpage for olive oil enthusiasts built with React,
                  using State, Context, and the new React 19 API “use”.
                  Features dynamic routing with react-router-dom, CSS
                  modules for styling, and a parallax homepage effect.
                  Key features include search functionality and a
                  favorites list.`,
    },
    {
      name: "E-commerce platform",
      image: `https://raw.githubusercontent.com/ptrmad/Ecommerce-shop/main/images/screenshot.png`,
      description: `A fully functional e-commerce application built with
                React, using hooks and react-router-dom for state
                management and navigation. Key features include
                adding/removing items from the cart and backend
                communication via Fetch API. Enhanced with
                additional features and optimizations to improve user
                experience.`,
    },
  ];

  return (
    <div className={styles.portfolio}>
      <H2>Projects</H2>
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.name} className={styles.projectItem}>
            <ProjectPreview data={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

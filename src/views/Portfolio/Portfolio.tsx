import { H2 } from "../../components/H2/H2";
import { ProjectPreview } from "../../components/ProjectPreview/ProjectPreview";
import { SlideInWrapper } from "../../components/SlideInWrapper/SlideInWrapper";
import styles from "./Portfolio.module.css";

interface PortfolioProject {
  name: string;
  image: string;
  description: string;
  techUsed: string[];
}

export function Portfolio() {
  const projects: PortfolioProject[] = [
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
      techUsed: ["React", "", "React-router-dom", "CSS modules", "React hooks"],
    },
    {
      name: "E-commerce platform",
      image:
        "https://raw.githubusercontent.com/ptrmad/Ecommerce-shop/main/images/screenshot.png",
      description: `A fully functional e-commerce application built with
                  React, using hooks and react-router-dom for state
                  management and navigation. Key features include
                  adding/removing items from the cart and backend
                  communication via Fetch API. Enhanced with
                  additional features and optimizations to improve user
                  experience.`,
      techUsed: ["React", "React hooks", "React-router-dom"],
    },
    {
      name: "Portfolio Webpage",
      image:
        "https://raw.githubusercontent.com/ptrmad/PortfolioPage/main/Portfolio%20screen.png",
      description: `Description: Designed a mobile-first portfolio webpage to showcase my projects and skills. It utilizes react-intersection observer for slide-in
      animation and EmailJS for handling sending messages from form built with use of react-hook-form`,
      techUsed: [
        "TypeScript",
        "React",
        "React hook form",
        "React-intersection-observer",
      ],
    },
    {
      name: "Tribute Page",
      image:
        "https://raw.githubusercontent.com/ptrmad/witkacyNEXT/main/WtkcScreen.png",
      description: `Project made with basic Next.js, designed mobile first.`,
      techUsed: ["TypeScript", "React", "Next.js"],
    },
  ];

  return (
    <div className={styles.portfolio}>
      <H2>Projects</H2>
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.name} className={styles.projectItem}>
            <SlideInWrapper>
              <ProjectPreview data={project} />
            </SlideInWrapper>
          </li>
        ))}
      </ul>
    </div>
  );
}

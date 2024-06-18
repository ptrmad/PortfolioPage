import { H2 } from "../../components/H2/H2";
import { ProjectPreview } from "../../components/ProjectPreview/ProjectPreview";
import { SlideInWrapper } from "../../components/SlideInWrapper/SlideInWrapper";
import styles from "./Portfolio.module.css";

interface PortfolioProject {
  name: string;
  image: string;
  description: string;
  techUsed: string[];
  features: string;
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
      features: "Search functionality and a favorites list.",
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
      features:
        "Adding/removing items from the cart and backend communication.",
    },
    {
      name: "Portfolio Webpage",
      image:
        "https://raw.githubusercontent.com/ptrmad/Ecommerce-shop/main/images/screenshot.png",
      description: `Description: Designed a mobile-first portfolio webpage to showcase my projects and skills.`,
      techUsed: [
        "TypeScript",
        "React",
        "React hook form",
        "React-intersection-observer",
      ],
      features: `
        Advanced Styling: Utilized React Intersection Observer to implement advanced styling and animations.
        Contact Form: Integrated React Hook Form for form handling and authentication, and used EmailJS for sending emails directly from the form.`,
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

// import { useContext } from "react";
import { H2 } from "../H2/H2";
import styles from "./ProjectPreview.module.css";
// import { TechContext } from "../../contexts/TechContext";

interface PortfolioProject {
  name: string;
  image: string;
  description: string;
  techUsed: string[];
  features: string;
}

interface ProjectPreviewProps {
  data: PortfolioProject;
}

export function ProjectPreview({ data }: ProjectPreviewProps) {
  // const tech = useContext(TechContext);

  return (
    <div className={styles.projectPreview}>
      <H2>{data.name}</H2>
      <div className={styles.projectImage}>
        <img src={data.image} alt={data.name} />
      </div>
      <p className={styles.projectDescription}>{data.description}</p>
    </div>
  );
}

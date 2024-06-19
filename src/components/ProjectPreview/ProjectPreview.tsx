import { useContext } from "react";
import { H2 } from "../../components/H2/H2";
import { TechItem } from "../../components/TechItem/TechItem";
import styles from "./ProjectPreview.module.css";
import { TechContext } from "../../contexts/TechContext";

interface PortfolioProject {
  name: string;
  image: string;
  description: string;
  techUsed: string[];
}

interface ProjectPreviewProps {
  data: PortfolioProject;
}

export function ProjectPreview({ data }: ProjectPreviewProps) {
  const techs = useContext(TechContext);

  const filteredTech = data.techUsed
    .map((techName) => techs.find((tech) => tech.name === techName))
    .filter((tech) => tech !== undefined);

  return (
    <div className={styles.projectPreview}>
      <H2>{data.name}</H2>
      <div className={styles.projectImage}>
        <img src={data.image} alt={data.name} />
      </div>
      <p className={styles.projectDescription}>{data.description}</p>
      <ul className={styles.techList}>
        {filteredTech.map(
          (tech) =>
            tech && <TechItem isInProject={true} key={tech.name} tech={tech} />
        )}
      </ul>
    </div>
  );
}

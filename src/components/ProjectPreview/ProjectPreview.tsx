import { H2 } from "../H2/H2";
import styles from "./ProjectPreview.module.css";

interface Project {
  name: string;
  image: string;
  description: string;
}

interface ProjectPreviewProps {
  data: Project;
}

export function ProjectPreview({ data }: ProjectPreviewProps) {
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

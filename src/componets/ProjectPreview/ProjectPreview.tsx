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
      <h3>{data.name}</h3>
      <div className={styles.projectImage}>
        <img src={data.image} alt={data.name} />
      </div>
      <p className={styles.projectDescription}>{data.description}</p>
    </div>
  );
}

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
      <img src={data.image} alt={data.name} className={styles.projectImage} />
      <p className={styles.projectDescription}>{data.description}</p>
    </div>
  );
}

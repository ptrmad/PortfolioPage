import styles from "./ProjectPreview.module.css";

export function ProjectPreview() {
  return (
    <div className={styles.projectPreview}>
      <h3>Project name</h3>
      <div>Project Image</div>
      <p>Project description</p>
      <p>Technologies used</p>
      <p>Link to GitHub</p>
    </div>
  );
}

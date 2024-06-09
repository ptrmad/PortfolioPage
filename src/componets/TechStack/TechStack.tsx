import styles from "./TechStack.module.css";

export function TechStack() {
  return (
    <div className={styles.techStack}>
      <h2>My Tech Stack</h2>
      <ul>HTML</ul>
      <div className={styles.horizontal}>
        <ul>CSS</ul>
        <div>
          <li>CSS modules</li>
          <li>Bootstrap</li>
        </div>
      </div>
      <ul>Typescript</ul>
      <div className={styles.horizontal}>
        <ul>React</ul>
        <div>
          <li>react hooks</li>
          <li>react hook form</li>
          <li>tanstack query</li>
          <li>react-router-dom</li>
          <li>react-intersection-observer</li>
        </div>
      </div>
      <ul>Vite</ul>
      <ul>Git</ul>
      <ul>VSCode</ul>
    </div>
  );
}

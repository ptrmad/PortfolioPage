import { useEffect, useState } from "react";
import styles from "./CatFact.module.css";

export function CatFact() {
  const [catFact, setCatFact] = useState("");
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    fetch(`https://catfact.ninja/fact?max_length=50`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response error");
        }
        return response.json();
      })
      .then((data) => setCatFact(data.fact))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <p className={styles.catHeading}>Psst! Enjoy a random cat fact:</p>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p className={styles.catFact}>{catFact || "Loading..."}</p>
      )}
    </>
  );
}

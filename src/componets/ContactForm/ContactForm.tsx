import styles from "./ContactForm.module.css";

export function ContactForm() {
  return (
    <form action="send" className={styles.form}>
      <input className={styles.formInput} type="text" placeholder="Name" />
      <input className={styles.formInput} type="mail" placeholder="Email" />
      <input className={styles.formInput} type="text" placeholder="Company" />
      <input
        className={styles.inputMessage}
        type="text"
        placeholder="Your message..."
      />
      <button className={styles.button}>Send</button>
    </form>
  );
}

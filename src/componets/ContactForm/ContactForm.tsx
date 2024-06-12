import styles from "./ContactForm.module.css";

export function ContactForm() {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
    }
  };

  return (
    <form action="send" className={styles.form}>
      <input className={styles.formInput} type="text" placeholder="Name" />
      <input className={styles.formInput} type="mail" placeholder="Email" />
      <input className={styles.formInput} type="text" placeholder="Company" />
      <textarea
        className={styles.inputMessage}
        placeholder="Your message..."
        onKeyPress={handleKeyPress}
      ></textarea>
      <button className={styles.button}>Send</button>
    </form>
  );
}

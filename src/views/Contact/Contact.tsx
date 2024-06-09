import styles from "./Contact.module.css";

export function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Let's talk!</h2>
      <div>Contact info</div>
      <h2>Send me a message!</h2>
      <form action="send" className={styles.form}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="Your message..." />
        <button>Send</button>
      </form>
    </div>
  );
}

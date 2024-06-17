import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./ContactForm.module.css";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  message: string;
  company: string;
}

export function ContactForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const templateParams = {
      from_name: data.name,
      from_mail: data.email,
      from_company: data.company,
      message: data.message,
      to_name: "PMD",
    };

    emailjs
      .send(
        "service_nu9ajgr",
        "template_978o0zk",
        templateParams,
        "r64_X6DlA2CbkGvow"
      )
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
        reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });
  };

  const nameField = register("name", { required: "Please enter your name :)" });
  const emailField = register("email", {
    required: "Please enter your email :)",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email address",
    },
  });
  const companyField = register("company", { required: false });
  const messageField = register("message", {
    required: "Please enter a message :)",
  });

  return (
    <form
      action="send"
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...nameField}
        id="name"
        className={styles.formInput}
        type="text"
        placeholder="Name"
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      <input
        {...emailField}
        id="email"
        className={styles.formInput}
        type="mail"
        placeholder="Email"
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <input
        {...companyField}
        id="company"
        className={styles.formInput}
        type="text"
        placeholder="Company"
      />
      <textarea
        {...messageField}
        id="message"
        className={styles.inputMessage}
        placeholder="Your message..."
        onKeyPress={handleKeyPress}
      ></textarea>
      {errors.message && (
        <p className={styles.error}>{errors.message.message}</p>
      )}

      <button type="submit" className={styles.button}>
        Send
      </button>
    </form>
  );
}

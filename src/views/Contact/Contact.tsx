import styles from "./Contact.module.css";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { H2 } from "../../components/H2/H2";
import { Link } from "react-router-dom";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { SlideInWrapper } from "../../components/SlideInWrapper/SlideInWrapper";

const contactData = [
  {
    name: "Email",
    icon: <MdEmail />,
    link: "mailto:your.email@example.com",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    link: "https://github.com/ptrmad",
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/piotr-drożdżał-688716229/",
  },
];

export function Contact() {
  return (
    <div className={styles.contact}>
      <SlideInWrapper>
        <H2>Let's talk!</H2>
        <ul className={styles.contactList}>
          {contactData.map((contact) => (
            <Link
              key={contact.name}
              to={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              {contact.icon}
              <span>{contact.name}</span>
            </Link>
          ))}
        </ul>
        <H2>Send me a message!</H2>
        <ContactForm />
      </SlideInWrapper>
    </div>
  );
}

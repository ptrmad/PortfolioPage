import { useInView } from "react-intersection-observer";
import styles from "./SladeInWrapper.module.css";
import { ReactNode } from "react";

interface SlideInWrapperProps {
  children: ReactNode;
}

export function SlideInWrapper({ children }: SlideInWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      style={{ display: "inline-block" }}
      ref={ref}
      className={`${styles.slideIn} ${inView ? styles.slideInVisible : ""}`}
    >
      {children}
    </div>
  );
}

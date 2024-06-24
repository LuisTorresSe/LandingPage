import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  stylesClass: string;
}

function Button({ children, stylesClass }: Props) {
  return (
    <button className={`${stylesClass} ${styles["button"]}`}>{children}</button>
  );
}

export default Button;

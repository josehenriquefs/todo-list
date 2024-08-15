import { PlusCircle } from "phosphor-react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
}
export function Button({ onClick }: ButtonProps) {
  return (
    <button className={styles.button} type="submit" onClick={onClick}>
      Criar
      <PlusCircle size={16} />
    </button>
  );
}

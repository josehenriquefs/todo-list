import { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputProps {
  text: string;
  setText: (text: string) => void;
}
export function Input({ text, setText }: InputProps) {
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Adicione uma nova tarefa"
      onChange={handleInputChange}
      value={text}
    />
  );
}

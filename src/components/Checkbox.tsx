import { Check, Circle } from "phosphor-react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

export function Checkbox({ isChecked, setIsChecked }: CheckboxProps) {
  function handleClick() {
    setIsChecked(!isChecked);
  }

  return (
    <div className={styles.checkbox}>
      {isChecked ? (
        <Check size={13} className={styles.checked} onClick={handleClick} />
      ) : (
        <Circle size={17} className={styles.unchecked} onClick={handleClick} />
      )}
    </div>
  );
}

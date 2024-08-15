import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import { Checkbox } from "./Checkbox";
import { useEffect, useState } from "react";

export interface TaskProps {
  onClick?: () => void;
  content: string;
  isCompleted: boolean;
  onDeleteTask: (task: string) => void;
  onTaskCompleted: (task: string) => void;
}

export function Task({
  content,
  onDeleteTask,
  onTaskCompleted,
  isCompleted,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(isCompleted);

  useEffect(() => {
    setIsChecked(isCompleted);
  }, [isCompleted]);

  function handleDeleteTask() {
    onDeleteTask(content);
  }
  function handleTaskCompleted() {
    setIsChecked(!isChecked);
    onTaskCompleted(content);
  }

  return (
    <div className={styles.task}>
      <Checkbox isChecked={isChecked} setIsChecked={handleTaskCompleted} />
      <p
        className={`${styles.taskDescription} ${
          isChecked ? styles.completed : ""
        }`}
      >
        {content}
      </p>
      <button className={styles.trash} onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}

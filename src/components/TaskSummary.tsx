import styles from "./TaskSummary.module.css";

interface TaskSummaryProps {
  createdTasks: number;
  completedTasks: number;
}
export function TaskSummary({
  createdTasks,
  completedTasks,
}: TaskSummaryProps) {
  function getCompletedTasksText() {
    if (completedTasks > 0 && completedTasks < createdTasks) {
      return `${completedTasks} de ${createdTasks}`;
    }
    return `${completedTasks}`;
  }

  return (
    <div className={styles.taskSummary}>
      <div className={styles.created}>
        <p className={styles.createdText}>Tarefas criadas</p>
        <p className={styles.createdNumber}> {createdTasks}</p>
      </div>
      <div className={styles.completed}>
        <p className={styles.completedText}>Concluídas</p>
        <p className={styles.completedNumber}>{getCompletedTasksText()}</p>
      </div>
    </div>
  );
}

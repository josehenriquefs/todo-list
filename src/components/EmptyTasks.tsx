import styles from "./EmptyTasks.module.css";

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <div className={styles.content}>
        <img src="src/assets/clipboard.svg" alt="clipboard" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}

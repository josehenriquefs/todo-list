import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Task } from "./components/Task";
import { TaskSummary } from "./components/TaskSummary";
import { useState } from "react";
import { EmptyTasks } from "./components/EmptyTasks";

interface TaskTeste {
  content: string;
  isCompleted: boolean;
}

function App() {
  const [text, setText] = useState("");

  function handleButtonClick() {
    const newTask = {
      content: text,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  const [tasks, setTasks] = useState<TaskTeste[]>([]);

  function deleteTask(taskToBeDeleted: string) {
    const newTasks = tasks.filter((task) => task.content !== taskToBeDeleted);
    setTasks(newTasks);
  }

  function completeTask(taskContent: string) {
    setTasks(
      tasks.map((task) =>
        task.content === taskContent
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  }

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <div className={styles.createTaskContainer}>
          <Input text={text} setText={setText} />
          <Button onClick={handleButtonClick} />
        </div>
        <div className={styles.contentContainer}>
          <TaskSummary
            createdTasks={tasks.length}
            completedTasks={tasks.filter((task) => task.isCompleted).length}
          />
          <div className={styles.tasksContainer}>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <Task
                  key={task.content}
                  content={task.content}
                  isCompleted={task.isCompleted}
                  onDeleteTask={deleteTask}
                  onTaskCompleted={completeTask}
                />
              ))
            ) : (
              <EmptyTasks />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

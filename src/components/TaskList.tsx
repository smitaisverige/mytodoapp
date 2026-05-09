import TaskItem from "./TaskItem";
import type { Task } from "../types/task";

type TaskListProps = {
  tasks: Task[];
  deleteTask: (id: number) => void;
};

const TaskList = ({ tasks, deleteTask }: TaskListProps) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
};

export default TaskList;
import Task from "./Task";
import TaskItem from "./TaskItem";

interface TasksList {
  taskList: Task[];
}

function ListAllTasks({ taskList }: TasksList) {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {taskList.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </ul>
    </div>
  );
}

export default ListAllTasks;

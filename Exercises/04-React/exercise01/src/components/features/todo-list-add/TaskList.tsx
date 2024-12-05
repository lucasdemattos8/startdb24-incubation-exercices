import { useState } from "react";
import Task from "./Task";
import TaskItem from "./TaskItem";

interface TasksList {
  taskList: Task[];
}

function ListAllTasks({ taskList }: TasksList) {
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [taskListState, setTaskList] = useState(taskList);

  function addTask() {
    const newTask = {
      id: taskListState.length + 1,
      description: newTaskDescription,
      complete: false,
    };
    setTaskList([...taskListState, newTask]);
    setNewTaskDescription("");
  }

  return (
    <div className="">
      <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          placeholder="Descreva a Tarefa"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button
          onClick={() => {
            addTask();
          }}
        >
          Adicionar
        </button>
      </div>
      <ul>
        {taskListState.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </ul>
    </div>
  );
}

export default ListAllTasks;

import { useState } from "react";
import Task from "./Task";
import TaskItem from "./TaskItem";

interface TasksList {
  taskList: Task[];
}

function ListAllTasks({ taskList }: TasksList) {
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [taskListState, setTaskList] = useState(taskList);
  const [filter, setFilter] = useState("All");

  const filteredList = taskListState.filter((task) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Done") {
      return task.complete;
    } else {
      return !task.complete;
    }
  });

  function addTask() {
    const roofId = taskListState.reduce((maxID, currentID) => {
      console.log(maxID);
      return maxID < currentID.id ? currentID.id : maxID;
    }, 0);

    const newTask = {
      id: roofId + 1,
      description: newTaskDescription,
      complete: false,
    };

    if (newTask.description.trim() === "") {
      alert("Tarefa com descrição inválida! Por favor, tente outra descrição.");
    }

    setTaskList([...taskListState, newTask]);
    setNewTaskDescription("");
  }

  function deleteItem(id: number): undefined {
    setTaskList(taskListState.filter((task) => task.id !== id));
  }

  function updateItemStatus(id: number): undefined {
    setTaskList(
      taskListState.map((task) => {
        if (task.id === id) {
          task.complete = !task.complete;
        }
        return task;
      })
    );
  }

  return (
    <div>
      <div className="p-1 flex justify-start">
        <input
          className="bg-white p-5 rounded-s-xl border border-r-0 w-full focus:outline-none focus:border focus:border-r-0 shadow-sm"
          type="text"
          placeholder="Descreva a Tarefa"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button
          className="justify-around bg-green-400 rounded-e-xl font-semibold px-5 text-white border border-l-0 shadow-sm"
          onClick={() => {
            addTask();
          }}
        >
          Adicionar
        </button>
      </div>
      <div className="bg-gray-800 p-5 rounded-xl my-5 w-full">
        <h1 className="text-white font-semibold text-2xl flex justify-center [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
          Tarefas em registro
        </h1>
        <div className="py-4 flex justify-center gap-10 text-stone-800">
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 rounded-lg bg-slate-100 hover:text-white hover:bg-green-400 transition-colors duration-80 ease-in-out
              ${filter === "All" && "bg-green-300 hover:bg-green-400"}`}
          >
            Todas
          </button>
          <button
            className={`px-4 py-2 rounded-lg bg-slate-100 hover:text-white hover:bg-green-400 transition ease-in-out delay-80
              ${filter === "Done" && "bg-green-300 "}`}
            onClick={() => setFilter("Done")}
          >
            Completas
          </button>
          <button
            className={`px-4 py-2 rounded-lg bg-slate-100 hover:text-white hover:bg-green-400 transition ease-in-out delay-80
              ${filter === "Incomplete" && "bg-green-300 hover:bg-green-400"}`}
            onClick={() => setFilter("Incomplete")}
          >
            Incompletas
          </button>
        </div>
        <ul>
          {filteredList.map((task) => (
            <TaskItem
              key={`${task.id}`}
              deleteTask={deleteItem}
              updateItemStatus={updateItemStatus}
              task={task}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListAllTasks;

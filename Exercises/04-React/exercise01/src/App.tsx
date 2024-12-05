import "./App.css";
import Task from "./components/features/todo-list/Task";
import ListAllTasks from "./components/todo-list-add-Delete/TaskList";

function App() {
  const taskList: Task[] = [
    { id: 1, description: "Regar as plantas", complete: true },
    { id: 2, description: "Academia", complete: false },
    { id: 3, description: "Dar banho no cachorro", complete: true },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-5 font-poppins font-semibold text-3xl">
        Lista de Tarefas
      </h1>
      <div className="font-poppins w-1/3">
        <ListAllTasks taskList={taskList} />
      </div>
    </div>
  );
}

export default App;

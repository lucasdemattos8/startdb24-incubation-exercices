import Task from "./Task";

function TaskItem(tasks: Task) {
  return (
    <li key={tasks.id} className="list-disc">
      <span className="text-gray-800">
        {tasks.id} {tasks.description}{" "}
        {tasks.complete ? "Completa" : "Andamento"}
      </span>
    </li>
  );
}

export default TaskItem;

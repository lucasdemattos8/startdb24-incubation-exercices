import Task from "./Task";

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => undefined;
  updateItemStatus: (id: number) => undefined;
}

function TaskItem({ task, deleteTask, updateItemStatus }: TaskItemProps) {
  return (
    <li key={task.id} className="my-4">
      <a
        onClick={(e) => {
          e.stopPropagation();
          updateItemStatus(task.id);
        }}
        onDoubleClick={(e) => {
          e.stopPropagation();
          console.log("Editar");
        }}
        className={`text-gray-800 bg-white grid grid-cols-task_table p-2 rounded-lg cursor-pointer select-none shadow-lg transition ease-in-out duration-100 transform
          ${
            task.complete
              ? "border-l-4 border-green-400"
              : "border-l-4 border-yellow-500"
          }`}
      >
        <div
          className={`text-ellipsis text-nowrap whitespace-nowrap overflow-hidden mr-3 flex 
          ${task.complete && "line-through"}`}
        >
          {task.description}
        </div>
        <button
          className="text-red-600 hover:text-red-900 transition ease-in-out transform"
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          Excluir
        </button>
      </a>
    </li>
  );
}

export default TaskItem;

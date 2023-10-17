function Todo({ task, deleteHandler, toggleHandler, editHandler }) {
  return (
    <div className="todo-holder">
      <p
        onClick={() => toggleHandler(task.id)}
        style={{ fontSize: 25 }}
        className={`${task.completed ? "todo-completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <button onClick={() => editHandler(task.id)} className="add-todo">
          edit
        </button>
        <button onClick={() => deleteHandler(task.id)} className="add-todo">
          delete
        </button>
      </div>
    </div>
  );
}

export default Todo;

import { useEffect, useRef, useState } from "react";

function EditedTodo({ task, taskEditHandler }) {
  const [editValue, setEditValue] = useState(task.task);
  const elRef = useRef(null);
  function submitHandler(e) {
    e.preventDefault();
    taskEditHandler(editValue, task.id);
  }
  useEffect(function () {
    elRef.current.focus();
  });

  return (
    <div>
      <form onSubmit={submitHandler} className="form-todo">
        <input
          ref={elRef}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          placeholder="edit the task"
          className="input-todo"
        />
        <button className="add-todo">edit</button>
      </form>
    </div>
  );
}

export default EditedTodo;

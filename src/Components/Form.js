import { useEffect, useRef, useState } from "react";

function Form({ addToDo }) {
  const [value, setValue] = useState("");
  const refInput = useRef(null);
  useEffect(() => refInput.current.focus());
  const submitHandler = (e) => {
    e.preventDefault();
    if (value !== "") {
      addToDo(value);
      setValue("");
    }
  };

  return (
    <div>
      <h3 className="Header">To Do List</h3>
      <form action="" onSubmit={submitHandler} className="form-todo">
        <input
          className="input-todo"
          ref={refInput}
          type="text"
          placeholder="what is your plan for today"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-todo">add</button>
      </form>
    </div>
  );
}

export default Form;

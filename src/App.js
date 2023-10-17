import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Form from "./Components/Form";
import Todo from "./Components/Todo";
import EditedTodo from "./Components/EditedTodo";

function App() {
  const [todos, setTodos] = useState(function () {
    const localValue = JSON.parse(localStorage.getItem("todosItem"));
    if (localValue) {
      return localValue;
    } else return [];
  });

  useEffect(
    function () {
      localStorage.setItem("todosItem", JSON.stringify(todos));
    },
    [todos]
  );
  const addToDo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const taskEditHandler = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="mainHolder">
      <Form addToDo={addToDo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditedTodo task={todo} taskEditHandler={taskEditHandler} />
        ) : (
          <Todo
            task={todo}
            deleteHandler={deleteHandler}
            toggleHandler={toggleHandler}
            editHandler={editHandler}
          />
        )
      )}
    </div>
  );
}

export default App;

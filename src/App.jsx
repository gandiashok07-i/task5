import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Todo List Updated");
  }, [todos]);

  const addTask = () => {

    if (task.trim() === "") return;

    setTodos([...todos, task]);

    setTask("");
  };

  const deleteTask = (index) => {

    const updatedTodos = todos.filter(
      (_, i) => i !== index
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="container">

      <h1>Todo App</h1>

      <div className="input-section">

        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>
          Add
        </button>

      </div>

      <ul>

        {todos.map((todo, index) => (

          <li key={index}>

            {todo}

            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default App;

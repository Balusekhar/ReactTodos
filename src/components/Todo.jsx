import React, { useState } from "react";
import TodoContainer from "./TodoContainer";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  function handleChange(event) {
    setInputTodo(event.target.value);
  }

  function addTodo() {
    if (inputTodo.trim() !== "") {
      setTodos([...todos, inputTodo]);
      setInputTodo("");
    }
  }

  function updateTodo(index, newText) {
    const updatedTodos = todos.map((todo, i) => (i === index ? newText : todo));
    setTodos(updatedTodos);
  }

  function deleteTodo(index) {
    let myTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(myTodos);
    console.log(myTodos);
  }

  return (
    <div className="w-[40vw] min-w-[500px] bg-white rounded-md p-6 shadow-lg">
      <h1 className="text-center text-2xl font-bold mb-6">TODO LIST</h1>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          onChange={handleChange}
          value={inputTodo}
          placeholder="Enter your todo..."
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTodo}
          className="bg-yellow-400 text-black px-4 py-2 rounded-md shadow hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>

      {/* Todo Container  */}
      <div>
        <h3 className="text-center text-xl font-bold mt-8 mb-5">MY TODOS</h3>
        <TodoContainer
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default Todo;

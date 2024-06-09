import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function TodoContainer({ todos, editTodo, deleteTodo,editState }) {


  return (
    <div className="w-[98%] min-w-[400px] bg-white rounded-md p-6 shadow-lg mt-6">
      {todos.length > 0 ? (
        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow"
            >
              <span>{todo}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => editTodo(index)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaEdit size={20} />
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">
          No todos available. Add some todos!
        </p>
      )}
    </div>
  );
}

export default TodoContainer;

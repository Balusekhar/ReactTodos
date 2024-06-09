// Import useState to manage local state
import React, { useState } from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

function TodoContainer({ todos, updateTodo, deleteTodo }) {
  const [editingIndex, setEditingIndex] = useState(null); // Track which todo is being edited
  const [editText, setEditText] = useState(""); // Track the new text for the todo being edited

  const handleEditClick = (index, currentText) => {
    setEditingIndex(index);
    setEditText(currentText); // Set the current text to the input field
  };

  const handleSaveClick = (index) => {
    updateTodo(index, editText); // Update the todo with the new text
    setEditingIndex(null); // Exit the edit mode
  };

  return (
    <div className="w-[98%] min-w-[400px] bg-white rounded-md p-6 shadow-lg mt-6">
      {todos.length > 0 ? (
        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow"
            >
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-grow p-2 me-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <span>{todo}</span>
              )}
              <div className="flex space-x-2">
                {editingIndex === index ? (
                  <button
                    onClick={() => handleSaveClick(index)}
                    className="text-green-500 hover:text-green-600"
                  >
                    <FaSave size={20} />
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(index, todo)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <FaEdit size={20} />
                  </button>
                )}
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

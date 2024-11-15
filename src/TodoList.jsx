import React from 'react';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : ''}`}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 text-red-600 hover:text-red-800 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

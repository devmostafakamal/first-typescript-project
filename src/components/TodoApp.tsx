"use client";

import React, { useState } from "react";

type FilterType = "all" | "active" | "completed";

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");
  const [filter, setFilter] = useState<FilterType>("all");
  // console.log(text);
  const handleAddTodo = () => {
    if (!text.trim()) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      done: false,
    };
    // console.log(newTodo);
    setTodos((prev) => [newTodo, ...prev]);
    setText("");
  };
  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filterTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-xl shadow">
      <div className="flex gap">
        <input
          type="text"
          placeholder="write a todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 px-6 py-2 hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {/* filter */}
      <div className="flex justify-center gap-3 mt-5">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded-lg ${
            filter === "all" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`px-3 py-1 rounded-lg ${
            filter === "active" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded-lg ${
            filter === "completed" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Complete
        </button>
      </div>
      <div>
        {filterTodos.map((todo) => (
          <div className="flex gap-2 items-center" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
            />

            {todo.text}
            <button
              className="px-6 py-1 border rounded bg-red-400"
              onClick={() => handleDelete(todo.id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        Total: {todos.length} | Completed: {todos.filter((t) => t.done).length}
      </div>
    </div>
  );
}

export default TodoApp;

"use client";

import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

type FilterType = "all" | "active" | "completed";
type PriorityType = "low" | "medium" | "high";

interface Todo {
  id: string;
  text: string;
  done: boolean;
  priority: PriorityType;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [priority, setPriority] = useState<PriorityType>("low");
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  // console.log(text);
  const handleAddTodo = () => {
    if (!text.trim()) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      done: false,
      priority: priority,
    };
    // console.log(newTodo);
    setTodos((prev) => [newTodo, ...prev]);
    setText("");
    // setPriority("low");
  };
  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  // start edit
  const handleEditStart = (todo: Todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };
  // save edit
  const handleEditSave = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo,
      ),
    );
    setEditId(null);
    setEditText("");
  };

  // cencel edit
  const handleEditCancel = () => {
    setEditId(null);
    setEditText("");
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filterTodos = todos.filter((todo) => {
    // if (filter === "active") return !todo.done;
    // if (filter === "completed") return todo.done;
    // return true;
    const matchesFilter =
      filter === "all" ? true : filter === "active" ? !todo.done : todo.done;

    const matchesSearch = todo.text
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // priorty base color
  const getPriorityColor = (p: PriorityType) => {
    if (p === "low") return "bg-green-200 text-green-800";
    if (p === "medium") return "bg-yellow-200 text-yellow-800";
    return "bg-red-200 text-red-800";
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-xl shadow">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="write a todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as PriorityType)}
          className="border rounded bg-blue-300"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 border rounded px-6 py-2 hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* filter */}
      <div className="flex justify-center gap-3 mt-5">
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search a todo..."
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
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
            {/* Priority Badge */}
            <span
              className={`text-xs px-2 py-1 rounded ${getPriorityColor(
                todo.priority,
              )}`}
            >
              {todo.priority.toUpperCase()}
            </span>

            {todo.text}

            {/* Edit Modal */}
            <div className="mt-10">
              {editId && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md">
                    <h2 className="text-lg font-bold mb-4">Edit Todo</h2>

                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <div className="flex justify-end gap-3 mt-5">
                      <button
                        onClick={handleEditCancel}
                        className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => handleEditSave(editId)}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              {editId === todo.id ? (
                <div>
                  <button
                    onClick={() => handleEditSave(todo.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                  >
                    Save
                  </button>

                  <button
                    onClick={handleEditCancel}
                    className="bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => handleEditStart(todo)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
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

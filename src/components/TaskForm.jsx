import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: desc.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onAdd(newTask);
    setTitle('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-grap-200 text-gray-800 dark:bg-gray-900 dark:text-gray-100 p-4 rounded shadow mb-6 ">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border-b p-2 mb-3 focus:outline-none"
        required
      />
      <textarea
        placeholder="Description (optional)"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full border p-2 mb-3 rounded"
      />
      <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
        Add Task
      </button>
    </form>
  );
}

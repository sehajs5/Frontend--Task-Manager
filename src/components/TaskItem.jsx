import React, { useState } from 'react';

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.description);

  const toggleComplete = () => {
    onUpdate({ ...task, completed: !task.completed });
  };

  const handleSave = () => {
    onUpdate({ ...task, title, description: desc });
    setEditing(false);
  };

  return (
    <div className={`p-4 border rounded mb-3 shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 ${task.completed ? 'bg-green-50' : 'bg-white'}`}>
      <div className="flex justify-between items-start">
        <div>
          <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
          {editing ? (
            <>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="ml-2 border-b"
              />
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="block w-full mt-2 border"
              />
            </>
          ) : (
            <div className="ml-2">
              <h3 className={`text-lg font-semibold ${task.completed ? 'line-through' : ''}`}>
                {task.title}
              </h3>
              {task.description && <p className="text-gray-600">{task.description}</p>}
              <p className="text-sm text-gray-400 mt-1">Created: {new Date(task.createdAt).toLocaleString()}</p>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {editing ? (
            <button onClick={handleSave} className="text-blue-600 hover:underline">Save</button>
          ) : (
            <button onClick={() => setEditing(true)} className="text-yellow-600 hover:underline">Edit</button>
          )}
          <button onClick={() => onDelete(task.id)} className="text-red-600 hover:underline">Delete</button>
        </div>
      </div>
    </div>
  );
}

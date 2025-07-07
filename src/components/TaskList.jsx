import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, filter, onUpdate, onDelete }) {
  const filtered = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center mt-4">No tasks here yet.</p>
      ) : (
        filtered.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

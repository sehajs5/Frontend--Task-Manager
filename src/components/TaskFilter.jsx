import React from 'react';

export default function TaskFilter({ filter, setFilter, tasks }) {
  const count = (type) => {
    if (type === 'completed') return tasks.filter(t => t.completed).length;
    if (type === 'pending') return tasks.filter(t => !t.completed).length;
    return tasks.length;
  };

  const tabs = ['all', 'completed', 'pending'];

  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mb-6">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-4 py-2 text-sm sm:text-base rounded transition-colors ${
            filter === tab
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-100'
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)} ({count(tab)})
        </button>
      ))}
    </div>
  );
}

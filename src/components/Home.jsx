import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';
import DarkModeToggle from './DarkMode';
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (updated) => setTasks(tasks.map(t => t.id === updated.id ? updated : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className="min-h-screen p-6 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
  <div className="flex justify-end">
    <DarkModeToggle />
  </div>
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Welcome, {localStorage.getItem('userName')} 👋</h2>

      <TaskForm onAdd={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />
      <TaskList tasks={tasks} filter={filter} onUpdate={updateTask} onDelete={deleteTask} />


    </div>
  );
}



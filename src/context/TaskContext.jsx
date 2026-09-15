import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design landing page mockup', category: 'Work', completed: true, dueDate: 'Today' },
    { id: 2, title: 'Set up Vite + Tailwind frontend', category: 'Dev', completed: true, dueDate: 'Today' },
    { id: 3, title: 'Build Tada interactive dashboard', category: 'Dev', completed: false, dueDate: 'Tomorrow' },
    { id: 4, title: 'Review API integration endpoints', category: 'Backend', completed: false, dueDate: 'Aug 31' },
  ]);

  const addTask = (title, category = 'General') => {
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      title,
      category,
      completed: false,
      dueDate: 'Today',
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
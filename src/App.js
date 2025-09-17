import { useState, useEffect } from 'react';
import { TaskForm } from './components/TaskForm';
import { Column } from './components/Column';
import './App.css';

const COLUMNS = ['To Do', 'In Progress', 'Done'];

function App() {
  // Load tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('kanban-tasks');
    return saved ? JSON.parse(saved) : [];
  });

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  };

  const onDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId.toString());
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, status) => {
    const taskId = e.dataTransfer.getData('taskId');

    setTasks(prev =>
      prev.map(task =>
        task.id.toString() === taskId
          ? { ...task, status: status.toLowerCase().replace(' ', '') }
          : task
      )
    );
  };

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status.toLowerCase().replace(' ', ''));
  };

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <TaskForm onSubmit={handleSubmit} />

      <div className="board">
        {COLUMNS.map(column => (
          <Column
            key={column}
            title={column}
            tasks={getTasksByStatus(column)}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragStart={onDragStart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

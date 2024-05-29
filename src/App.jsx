import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task }]);
  };

  const countInProgressTasks = () => {
    return tasks.filter(task => task.status === 'in-progress').length;
  };

  const changeStatus = (id, newStatus) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, status: newStatus } : task)));
  };

  const handleStatusChange = (id, newStatus) => {
    const currentTask = tasks.find(task => task.id === id);
  
    if (currentTask.status === 'completed') {
      alert('Status change not allowed for completed tasks.');
      return;
    }
  
    if (newStatus === 'in-progress' && countInProgressTasks() >= 2) {
      alert('Only two tasks can be in progress at a time.');
      return;
    }
  
    if (newStatus === 'pending' && countInProgressTasks() === 1) {
      alert('Another task is already in progress. This task cannot be set to pending directly.');
      return;
    }
  
    if (
      (currentTask.status === 'pending' && newStatus === 'in-progress') ||
      (currentTask.status === 'in-progress' && newStatus === 'completed') ||
      (currentTask.status === 'in-progress' && newStatus === 'pending')
    ) {
      changeStatus(id, newStatus);
    } else {
      alert('Status cannot be changed directly from pending to completed.');
    }
  };
  

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App p-8 w-[80%] mx-auto">
      <h1 className="text-3xl font-bold mb-8">To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} changeStatus={handleStatusChange} deleteTask={deleteTask} />
    </div>
  );
};

export default App;

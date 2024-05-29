import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, status: 'pending' });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-4">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="px-4 py-2 border border-gray-300 rounded-md"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="px-4 py-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;

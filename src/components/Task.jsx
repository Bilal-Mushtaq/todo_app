import React from 'react';

const Task = ({ task, changeStatus, deleteTask }) => {
  const { id, title, description, status } = task;

  const handleChange = (e) => {
    const newStatus = e.target.value;
    changeStatus(id, newStatus);
  };

  return (
    <div className={`task ${status} p-4 mb-4 border rounded-md`}>
      <h3 className="font-bold text-lg">* {title}</h3>
      <p className="mb-2">{description}</p>
      <select
        value={status}
        onChange={handleChange}
        className="px-2 py-1 border rounded-md"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      {status === 'completed' && (
        <button
          onClick={() => deleteTask(id)}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default Task;

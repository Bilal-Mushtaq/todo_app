import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, changeStatus, deleteTask }) => {
  const inProgressCount = tasks.filter(task => task.status === 'in-progress').length;

  const renderTasks = (status) => tasks
    .filter((task) => task.status === status)
    .map((task) => (
      <Task
        key={task.id}
        task={task}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        inProgressCount={inProgressCount}
      />
    ));

  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className="w-full md:w-1/3 border">
        <div className="m-4">
          <h2 className="text-xl font-bold mb-4 text-center">Pending</h2>
          {renderTasks('pending')}
        </div>
      </div>
      <div className="w-full md:w-1/3 border">
        <div className="m-4">
          <h2 className="text-xl font-bold mb-4 text-center">In Progress</h2>
          {renderTasks('in-progress')}
        </div>
      </div>
      <div className="w-full md:w-1/3 border">
        <div className="m-4">
          <h2 className="text-xl font-bold mb-4 text-center">Completed</h2>
          {renderTasks('completed')}
        </div>
      </div>
    </div>
  );
};

export default TaskList;

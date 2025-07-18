import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, removeTask, onToggle }) {
  return (
    <>
      <h2 className="text-4xl font-semibold mb-4 text-white">Tasks List</h2>
      <ul className="mt-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={removeTask}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;

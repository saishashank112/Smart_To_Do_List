import React from 'react';

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li
      className={`flex items-center justify-between px-5 py-4 mb-4 rounded-xl shadow-md transition-all duration-300 
        ${task.completed
          ? 'bg-gradient-to-r from-green-700 to-green-900 text-gray-300 line-through'
          : 'bg-white/10 text-white hover:bg-white/20 hover:scale-[1.01]'}`}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 accent-green-400"
        />
        <span className="text-lg font-medium">{task.title}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-400 hover:text-red-600 text-xl font-bold transition"
      >
        ×
      </button>
    </li>
  );
}

export default TaskItem;

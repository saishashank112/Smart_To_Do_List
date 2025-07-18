import React from 'react';

function FocusSidebar({ tasks, seconds }) {
  const activeCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="absolute right-4 top-30 w-60  text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-4lg font-semibold mb-2">🎯 Focus Sidebar</h3>
      <p>Active Tasks: {activeCount}</p>
      <p>Time Focused: {Math.floor(seconds / 60)} min</p>
    </div>
  );
}

export default FocusSidebar;

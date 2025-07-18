import React from 'react';

function StatsPanel({ tasks }) {
  const completed = tasks.filter(task => task.completed).length;
  const pending = tasks.filter(task => !task.completed).length;

  return (
    <div className=" mt-20 p-4 rounded-xl w-400 shadow">
      <h2 className="text-3xl font-bold mb-2">📊 Task Stats</h2>
      <p className='text-2xl'>✅ Completed: {completed}</p>
      <p className='text-2xl'>🕒 Pending: {pending}</p>
      <p className='text-2xl'>📋 Total: {tasks.length}</p>
      <hr className='m-4' />
      
    </div>
  );
}

export default StatsPanel;

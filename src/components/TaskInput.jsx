import React from 'react';

function TaskInput({ task, setTask, addTask }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold mb-6 text-white tracking-tight">📝 Todo List</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="What needs to get done?"
          className="flex-1 p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400 backdrop-blur-md"
        />
        <button
          onClick={addTask}
          className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-400 hover:to-red-400 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
        >
          ➕ Add Task
        </button>
      </div>
    </main>
  );
}

export default TaskInput;

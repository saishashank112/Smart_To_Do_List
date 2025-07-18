import React from 'react';

function Header({ seconds, startTimer, stopTimer, resetTimer }) {
  const formatTime = () => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <nav className="mx-auto my-4 w-11/12 backdrop-blur-md bg-white/10 text-white px-6 py-4 flex justify-between items-center rounded-full shadow-lg">
      <div className="text-3xl font-extrabold">⚡ Focus Forge</div>
      <div className="flex space-x-6 items-center text-lg font-medium">
        <span className=" px-4 py-1 rounded text-yellow-400">{formatTime()}</span>
        <button onClick={startTimer} className="hover:text-green-400 transition">Start</button>
        <button onClick={stopTimer} className="hover:text-red-400 transition">Stop</button>
        <button onClick={resetTimer} className="hover:text-blue-400 transition">Reset</button>
      </div>
    </nav>
  );
}

export default Header;

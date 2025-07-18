    import React from 'react';

    function SessionPanel({ sessionXP, completedTasks }) {
    return (
        <>
        
        <div className="border-red-50 text-white p-4 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-2">🧠 Session Tracker</h2>
        <p className='text-2xl'>XP Earned: <span className="text-yellow-300 font-semibold">{sessionXP}</span></p>
        <p className='text-2xl'>Tasks Completed: <span className="text-green-300 font-semibold">{completedTasks}</span></p>
        </div>
        <hr />
        <div className="mt-4 p-4 rounded-xl text-white shadow">
        <h2 className="text-3xl font-bold mb-2">📅 Session Summary</h2>
        <p className='text-xl'>Keep up the great work! Every task completed is a step towards your goals.</p>
            <p className='text-lg'>Remember to take breaks and stay hydrated!</p>
            <p className='text-lg'>Reflect on your progress and plan for the next session.</p>
            <p className='text-lg'>Stay focused and keep pushing forward!</p>
        </div>
        </>
    );
    }

    export default SessionPanel;

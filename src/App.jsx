import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import StatsPanel from "./components/StatsPanel";
import FocusSidebar from "./components/FocusSidebar";
import SessionPanel from "./components/SessionPanel";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [seconds, setSeconds] = useState(0);
  const [sessionXP, setSessionXP] = useState(0);
  const intervalRef = useRef(null);

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Cleanup timer
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: task.trim(),
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setTask("");
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          const updated = { ...task, completed: !task.completed };
          setSessionXP((xp) => xp + (updated.completed ? 10 : -10));
          return updated;
        }
        return task;
      })
    );
  };

  const startTimer = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  // Derive completed task count from tasks
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div
      className="App bg-black min-h-screen p-4 text-white"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/04/49/59/30/360_F_449593022_Nw9tfMtzPQwlrM4h830hs8RSg0sFMLjK.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Header
        seconds={seconds}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
      <div className="flex justify-around items-start mt-6 gap-8">
        <div className="w-[50%]">
          <TaskInput task={task} setTask={setTask} addTask={addTask} />
          <TaskList tasks={tasks} removeTask={removeTask} onToggle={toggleTask} />
        </div>
        <div className="flex flex-col gap-4 w-[40%]">
          <StatsPanel tasks={tasks} />
          <SessionPanel sessionXP={sessionXP} completedTasks={completedTasks} />
        </div>
      </div>
      <FocusSidebar tasks={tasks} seconds={seconds} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
const serverUrl=import.meta.env.VITE_BACKEND_URL
export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const getTasks = async () => {
    const res = await axios.get(`${serverUrl}/api/tasks`, {
      withCredentials: true,
    });
    setTasks(res.data);
  };
  const addTask = async () => {
    if (!title.trim())
       return;
    await axios.post(
      `${serverUrl}/api/tasks`,
      { title },
      { withCredentials: true }
    );
    setTitle("");
    getTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${serverUrl}/api/tasks/${id}`, {
      withCredentials: true,
    });
    getTasks();
  };
  const toggleStatus = async (task) => {
    await axios.put(
      `${serverUrl}/api/tasks/${task._id}`,
      {
        status: task.status === "completed" ? "pending" : "completed",
      },
      { withCredentials: true }
    );
    getTasks();
  };
  useEffect(() => {
    getTasks;
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">

      {/* Glass Card */}
      <div className="w-full max-w-2xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-6 transition-all duration-500 hover:scale-[1.01]">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
          🚀 Task Manager
        </h1>
        {/* Input */}
        <div className="flex gap-3 mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="✨ Add a new task..."
            className="flex-1 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-md outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <button
            onClick={addTask}
            className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-xl hover:bg-indigo-100 transition duration-300"
          >
            Add
          </button>
        </div>
        {/* Task List */}
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
          {tasks.length === 0 ? (
            <div className="text-center text-white/80 py-10 animate-pulse">
              😴 No tasks yet
            </div>
          ) : (
            tasks.map((task) => (
              <div
                key={task._id}
                className="flex justify-between items-center bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Left */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.status === "completed"}
                    onChange={() => toggleStatus(task)}
                    className="w-5 h-5 accent-indigo-600 cursor-pointer"
                  />

                  <span
                    className={`text-gray-800 font-medium transition ${
                      task.status === "completed"
                        ? "line-through text-gray-400"
                        : ""
                    }`}
                  >
                    {task.title}
                  </span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">

                  {/* Status Badge */}
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      task.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {task.status}
                  </span>

                  {/* Delete */}
                  <button
                    onClick={() => deleteTask(task._id)}
                    className="text-red-500 hover:text-red-700 transition text-lg"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
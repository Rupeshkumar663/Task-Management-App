import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTasks, FaChartLine, FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Nav"
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Manage Your Tasks
          <span className="block text-green-300 mt-2">
            Like a Pro ⚡
          </span>
        </h1>

        <p className="mt-6 text-lg text-white/80 max-w-2xl">
          Organize, track and boost your productivity with our modern
          task management system.
        </p>

        <div className="mt-10 flex gap-5 flex-wrap justify-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            🚀 Dashboard
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-indigo-600 transition"
          >
            Get Started
          </button>
        </div>

      </section>

      {/* FEATURES */}
      <section className="px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features ⚡
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl hover:scale-105 transition">
            <FaTasks className="text-3xl text-green-300 mb-4" />
            <h3 className="text-xl font-semibold">Task Management</h3>
            <p className="text-white/80 mt-2">
              Create & manage your tasks easily.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl hover:scale-105 transition">
            <FaCheckCircle className="text-3xl text-green-300 mb-4" />
            <h3 className="text-xl font-semibold">Status Tracking</h3>
            <p className="text-white/80 mt-2">
              Track progress of your tasks.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl hover:scale-105 transition">
            <FaChartLine className="text-3xl text-green-300 mb-4" />
            <h3 className="text-xl font-semibold">Analytics</h3>
            <p className="text-white/80 mt-2">
              Improve productivity with insights.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 pb-20">
        <h2 className="text-3xl font-bold">
          Start Managing Today 🚀
        </h2>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 px-10 py-3 bg-green-400 text-black rounded-xl font-semibold hover:scale-105 transition"
        >
          Start Now
        </button>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin} from "react-icons/fa";
export default function Footer() {
    
  return (
    <footer className="bg-black/80 backdrop-blur-md text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">
           Task Management
          </h2>
          <p className="text-gray-400 mt-3">
            Manage tasks smartly and track your carbon impact efficiently.
          </p>
        </div>
        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/dashboard">Dashboard</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/profile">Profile</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/login">Login</Link></li>
          </ul>
        </div>
        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-xl text-gray-400">
           <a 
             href="https://github.com/Rupeshkumar663" 
             target="_blank" 
             rel="noopener noreferrer"
             >
             <FaGithub className="hover:text-white cursor-pointer transition" />
           </a>
            
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="text-center border-t border-white/10 py-4 text-gray-500 text-sm">
        © 2026 CarbonTask. All rights reserved.
      </div>
    </footer>
  );
}
import React from "react";
import { Meta, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
// pages------------------------------------------------
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Forgetpassword from "./pages/ForgetPassword";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  const { userData }=useSelector((state)=>state.user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={!userData ? <SignUp /> : <Navigate to="/" />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={userData ?<Profile /> : <Navigate to="/signup" />}/>
        <Route path="/forget" element={<Forgetpassword /> }/>
        <Route path="/editprofile" element={userData ? <EditProfile /> : <Navigate to="/signup" />}/>
        <Route path="/dashboard" element={userData ?<Dashboard />: <Navigate to="/signup" /> }/></Routes>
    </>
  );
}
export default App;

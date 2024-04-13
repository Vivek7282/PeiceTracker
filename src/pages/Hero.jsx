// Dashboard.js
import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;

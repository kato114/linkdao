import React from "react";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css";
import States from "./components/States/States";

import logo from "../../assets/logo.png";
import dashboard from "../../assets/dashboard.png";
import admins from "../../assets/admins.png";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <img src={logo} alt="" />
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-tabs">
          <ul>
            <li>
              <a href="#">
                <img src={dashboard} alt="" />
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={admins} alt="" />
                <p>Create admin</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="dashboard-component">
          <States />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

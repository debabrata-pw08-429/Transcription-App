import React, { useState } from "react";
import {
  FaPlus,
  FaPen,
  FaPodcast,
  FaGem,
  FaCog,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import QuesLogo1 from "../../assets/QuesLogo1.png";
import Rectangle89 from "../../assets/Rectangle89.png";
import "./sidebar.css";

const Sidebar = ({ setOpenAccountSettings }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to get base URL and append route
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "active-link" : "inactive-link";

  const baseUrl = location.pathname.split("/").slice(0, -1).join("/");

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="logo">
          <img src={QuesLogo1} alt="Ques Logo" />
        </div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li>
            <NavLink
              to={`${baseUrl}/add your podcast`}
              className={getNavLinkClass}
            >
              <FaPlus className="icons" />
              {isOpen && "Add your Podcast(s)"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${baseUrl}/create and repurpose`}
              className={getNavLinkClass}
            >
              <FaPen className="icons" />
              {isOpen && "Create & Repurpose"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${baseUrl}/podcast widget`}
              className={getNavLinkClass}
            >
              <FaPodcast className="icons" />
              {isOpen && "Podcast Widget"}
            </NavLink>
          </li>
          <li>
            <NavLink to={`${baseUrl}/upgrade`} className={getNavLinkClass}>
              <FaGem className="icons" />
              {isOpen && "Upgrade"}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="help">
          <NavLink to={`${baseUrl}/help`} className={getNavLinkClass}>
            <FaCog className="icons" />
            {isOpen && "Help"}
          </NavLink>
        </div>
        <div className="user-info" onClick={() => setOpenAccountSettings(true)}>
          <img src={Rectangle89} alt="User" />
          {isOpen && (
            <div>
              <h3>Username</h3>
              <p>username@gmail.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

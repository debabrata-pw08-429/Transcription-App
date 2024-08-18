import React from "react";
import QuesLogo1 from "../../assets/QuesLogo1.png";
import settings_Icon from "../../assets/settings_Icon.png";
import notifications_icon from "../../assets/notifications_icon.png";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={QuesLogo1} alt="QuesLogo1.png" />
      </div>
      <div className="icons">
        <img src={settings_Icon} alt="settings_Icon.png" />
        <img src={notifications_icon} alt="notifications_icon.png" />
      </div>
    </header>
  );
};

export default Navbar;

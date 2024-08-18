import React from "react";
import ProfileImage from "../../assets/Rectangle89.png";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <div className="account-settings-header">
        <button
          className="back-button"
          onClick={() => window.location.reload()}
        >
          &#8592;
        </button>
        <h2>Account Settings</h2>
      </div>

      <div className="account-settings-user-info">
        <img
          src={`https://via.placeholder.com/100` || ProfileImage}
          alt="User"
          className="user-avatar"
        />
        <div className="user-details">
          <div className="input-group">
            <label>User Name</label>
            <input type="text" value="alphauser" readOnly />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value="alphauser@gmail.com" readOnly />
          </div>
        </div>
      </div>

      <div className="subscriptions">
        <p>Subscriptions</p>
        <div className="no-subscription">
          <p>
            Oops! You don’t have any active plans. <a href="/">Upgrade now!</a>
          </p>
          <button className="upgrade-button">Upgrade</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;

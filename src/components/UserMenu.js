import React from "react";
import PropTypes from "prop-types";

const UserMenu = ({ signOut }) => {
  return (
    <div className="user-menu">
      <span onClick={signOut} className="signout-link">
        Log Out
      </span>
    </div>
  );
};

UserMenu.propTypes = {
  signOut: PropTypes.func.isRequired
};

export default UserMenu;

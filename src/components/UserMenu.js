import React from "react";
import PropTypes from "prop-types";

const UserMenu = ({ signOut, clearCurrentBook }) => {
  return (
    <div className="user-menu">
      <span onClick={clearCurrentBook} className="clear-current-book-link">
        All NoteBooks
      </span>
      <span onClick={signOut} className="signout-link">
        Log Out
      </span>
    </div>
  );
};

UserMenu.propTypes = {
  clearCurrentBook: PropTypes.func,
  signOut: PropTypes.func.isRequired
};

export default UserMenu;

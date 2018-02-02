import React from "react";
import PropTypes from "prop-types";
import UserMenu from "./UserMenu";

const LargeNav = ({ signedIn, signOut }) => {
  const userMenu = () => {
    if (signedIn) {
      return <UserMenu signOut={signOut} />;
    }
  };
  return (
    <nav className="nav">
      <div className="logo">NoteBook2</div>
      {userMenu()}
    </nav>
  );
};

LargeNav.propTypes = {
  signOut: PropTypes.func.isRequired,
  signedIn: PropTypes.bool
};

export default LargeNav;

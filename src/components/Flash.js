import React from "react";
import PropTypes from "prop-types";

const Flash = ({ flashType, message, closeFlash }) => {
  const isFlashPresent = message => {
    return message !== "";
  };

  const setTimer = () => {
    setTimeout(closeFlash, 4000);
  };

  if (isFlashPresent(message)) {
    setTimer();
    return (
      <div id="flash" className={"flash-" + flashType}>
        <div className="flash-message">{message}</div>
        <div className="close-button">
          <button onClick={closeFlash} className="close-flash btn-small">
            X
          </button>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

Flash.propTypes = {
  flashType: PropTypes.string,
  message: PropTypes.string,
  closeFlash: PropTypes.func.isRequired
};

Flash.defaultProps = {
  message: ""
};

export default Flash;

import React from "react";
import PropTypes from "prop-types";

const SubmitButton = ({ value, onSubmit, errors }) => {
  const errorsPresent = errors => {
    return Object.keys(errors).length > 0 ? true : false;
  };

  return (
    <div className="form-group">
      <input
        className="button"
        name="submit"
        id="submit"
        type="submit"
        value={value || "Submit"}
        onClick={onSubmit}
        disabled={errorsPresent(errors)}
      />
    </div>
  );
};

SubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
  errors: PropTypes.object
};

SubmitButton.defaultProps = {
  errors: {}
};
export default SubmitButton;

import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ title, name, fieldType, value, onChange }) => {
  return (
    <div className="form-group">
      <input
        name={name}
        id={name}
        className={"input-" + name}
        type={fieldType || "text"}
        value={value}
        placeholder={title}
        onChange={onChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fieldtype: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;

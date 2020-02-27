import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ placeholder, callback, defaultValue, readonly, textOk }) => {
  return (
    <textarea
      className={`TextBox ${textOk}`}
      placeholder={placeholder}
      cols="20"
      rows="5"
      onChange={callback}
      defaultValue={defaultValue}
      readOnly={readonly}
    />
  );
};

TextBox.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  textOk: PropTypes.string,
  callback: PropTypes.func,
  readonly: PropTypes.bool,
};

TextBox.defaultProps = {
  placeholder: '',
  defaultValue: '',
  textOk: '',
  callback: () => {},
  readonly: false,
};

export default TextBox;

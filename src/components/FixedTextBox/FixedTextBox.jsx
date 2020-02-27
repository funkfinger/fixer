import React from 'react';
import PropTypes from 'prop-types';

const FixedTextBox = ({ text, textOk }) => {
  return (
    <div className={`fixed-text-area ${textOk}`}>{text}</div>
    // <TextBox placeholder="" defaultValue={text} readonly textOk={textOk} />
  );
};

FixedTextBox.propTypes = {
  text: PropTypes.string,
  textOk: PropTypes.string,
};

FixedTextBox.defaultProps = {
  text: 'enter text above...',
  textOk: '',
};

export default FixedTextBox;

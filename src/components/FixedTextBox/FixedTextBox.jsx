import React from 'react';
import PropTypes from 'prop-types';

import TextBox from '../TextBox/TextBox';

const FixedTextBox = ({ text, textOk }) => {
  return (
    <TextBox
      placeholder="enter text here..."
      defaultValue={text}
      readonly
      textOk={textOk}
    />
  );
};

FixedTextBox.propTypes = {
  text: PropTypes.string,
  textOk: PropTypes.string,
};

FixedTextBox.defaultProps = {
  text: '',
  textOk: '',
};

export default FixedTextBox;

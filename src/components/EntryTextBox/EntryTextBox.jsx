import React from 'react';
import PropTypes from 'prop-types';

import TextBox from '../TextBox/TextBox';

const EntryTextBox = ({ callback }) => {
  const changeText = newVal => {
    // setText(newVal);
    callback(newVal);
  };

  return (
    <TextBox
      callback={e => {
        changeText(e.target.value);
      }}
      placeholder="enter text here..."
    />
  );
};

EntryTextBox.propTypes = {
  callback: PropTypes.func,
};

EntryTextBox.defaultProps = {
  callback: () => {},
};

export default EntryTextBox;

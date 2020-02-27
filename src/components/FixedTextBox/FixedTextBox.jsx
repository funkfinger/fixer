import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FixedTextBox = ({
  text,
  textOk,
  textPlain,
  textPlainLength,
  messageCount,
}) => {
  const textAreaRef = useRef(null);
  const [coppiedMessage, setCoppiedMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(!textOk);

  const copyToClipboard = e => {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCoppiedMessage(' ...coppied!');
    setButtonDisabled(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCoppiedMessage('');
      setButtonDisabled(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [coppiedMessage]);

  return (
    <div className="fixed-text">
      <div
        id="checked-text-area"
        className={`fixed-text-area ${textOk ? 'textOk' : 'textBad'}`}
      >
        <div className="badCharacterMessage">BAD CHARACTER IN MESSAGE!</div>
        <div className="message">
          <div>&nbsp;{text}</div>
          <textarea
            id="copyTextbox"
            ref={textAreaRef}
            defaultValue={textPlain}
          />
          <p className="character-count">
            {textPlainLength} character{textPlainLength === 1 ? ' / ' : 's / '}
            {messageCount} message{messageCount === 1 ? '' : 's'}
          </p>
        </div>
      </div>
      <button
        onClick={copyToClipboard}
        type="button"
        disabled={!textOk && !buttonDisabled}
      >
        copy text to clipboard<em>{coppiedMessage}</em>
      </button>
    </div>
  );
};

FixedTextBox.propTypes = {
  text: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  textOk: PropTypes.bool,
  textPlain: PropTypes.string,
  textPlainLength: PropTypes.number,
  messageCount: PropTypes.number,
};

FixedTextBox.defaultProps = {
  text: '',
  textOk: true,
  textPlain: '',
  textPlainLength: 0,
  messageCount: 0,
};

export default FixedTextBox;

import React, { useState } from 'react';

import Header from './components/Header/Header';
import EntryTextBox from './components/EntryTextBox/EntryTextBox';
import FixedTextBox from './components/FixedTextBox/FixedTextBox';
import gsmCharSet from './gsmCharSet';

import './App.css';

const countsAsTwoCharacters = ['[', '\\', ']', '^', '{', '|', '}', '~'];

const addDoubleCharacters = characters => {
  let extraChars = 0;
  characters.forEach(character => {
    if (countsAsTwoCharacters.includes(character.character)) {
      extraChars += 1;
    }
  });
  return extraChars;
};

const buildMessageText = characters => {
  let messageCount;
  const message = characters.map((character, i) => {
    messageCount = Math.floor(i / 160) + 1;
    const toggle = messageCount % 2 === 0 ? 1 : 2;
    const c = Object.assign(character);
    // eslint-disable-next-line react/no-array-index-key
    return c.ok ? (
      <em key={i} className={`m${toggle}`}>
        {c.character}
      </em>
    ) : (
      <i key={i} className={`m${toggle}`}>
        {c.character}
      </i>
    );
  });
  return { message, messageCount };
};

const App = () => {
  const [text, setText] = useState([<em key="nokey" />]);
  const [textOk, setTextOk] = useState(true);
  const [textPlain, setTextPlain] = useState('');
  const [textPlainLength, setTextPlainLength] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  const checkText = textToCheck => {
    const trimmedText = textToCheck.trim();
    let ok = true;
    const textArray = [];
    trimmedText.split('').forEach(character => {
      const characterObj = { character, ok: true };
      if (characterObj.character.charCodeAt(0) < 32) characterObj.ok = false;
      if (!gsmCharSet.includes(character)) {
        ok = false;
        characterObj.ok = false;
      }
      textArray.push(characterObj);
    });

    const { message, messageCount } = buildMessageText(textArray);
    setText(message);
    setMessageCount(messageCount);
    if (ok) {
      setTextOk(true);
      setTextPlain(trimmedText);
      setTextPlainLength(trimmedText.length + addDoubleCharacters(textArray));
    } else {
      setTextOk(false);
      setTextPlain('');
    }
  };

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <EntryTextBox callback={checkText} />
        <FixedTextBox
          text={text}
          textOk={textOk}
          textPlain={textPlain}
          textPlainLength={textPlainLength}
          messageCount={messageCount}
        />
      </main>
    </div>
  );
};

export default App;

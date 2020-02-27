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
  const text = characters.map((character, i) => {
    const c = Object.assign(character);
    // eslint-disable-next-line react/no-array-index-key
    return c.ok ? <em key={i}>{c.character}</em> : <i key={i}>{c.character}</i>;
  });
  return text;
};

const App = () => {
  const [text, setText] = useState([<em key="nokey" />]);
  const [textOk, setTextOk] = useState(true);
  const [textPlain, setTextPlain] = useState('');
  const [textPlainLength, setTextPlainLength] = useState(0);

  const checkText = textToCheck => {
    let ok = true;
    const textArray = [];
    textToCheck.split('').forEach(character => {
      const characterObj = { character, ok: true };
      if (characterObj.character.charCodeAt(0) < 32) characterObj.ok = false;
      if (!gsmCharSet.includes(character)) {
        ok = false;
        characterObj.ok = false;
      }
      textArray.push(characterObj);
    });

    const message = buildMessageText(textArray);
    setText(message);
    if (ok) {
      setTextOk(true);
      setTextPlain(textToCheck);
      setTextPlainLength(textToCheck.length + addDoubleCharacters(textArray));
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
        />
      </main>
    </div>
  );
};

export default App;

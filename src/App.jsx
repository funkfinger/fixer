import React, { useState } from 'react';

import EntryTextBox from './components/EntryTextBox/EntryTextBox';
import FixedTextBox from './components/FixedTextBox/FixedTextBox';
import gsmCharSet from './gsmCharSet';

import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [textOk, setTextOk] = useState('textOk');

  const fixText = textToFix => {
    let ok = true;
    setTextOk('textOk');
    textToFix.split('').forEach(letter => {
      if (!gsmCharSet.includes(letter)) {
        setTextOk('textBad');
        ok = false;
      }
    });
    if (ok) {
      setText(textToFix);
    } else {
      setText('bad character');
    }
  };

  return (
    <div className="App">
      <main>
        <EntryTextBox callback={fixText} />
        <FixedTextBox text={text} textOk={textOk} />
      </main>
    </div>
  );
};

export default App;

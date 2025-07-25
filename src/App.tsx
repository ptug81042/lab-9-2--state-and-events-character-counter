import React, { useState } from 'react';
import './App.css';

import CharacterCounter from './components/CharacterCounter/CharacterCounter';
import StatsDisplay from './components/StatsDisplay/StatsDisplay';
import TextInput from './components/TextInput/TextInput';

function App() {
  // State for the text input controlled by App
  const [text, setText] = useState('');

  // Compute stats based on the controlled text
  const characterCount = text.length;
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const readingTime = wordCount / 200;

  return (
    <>
      <div className="App">
        <h1>Character Counter Demo</h1>

        <TextInput onChange={setText} placeholder='Type something here...' />

        <StatsDisplay stats={{ characterCount, wordCount, readingTime }} showReadingTime={true} />

        <hr />

        <CharacterCounter minWords={5} maxWords={100} targetReadingTime={1} />
      </div>
    </>
  )
}

export default App;

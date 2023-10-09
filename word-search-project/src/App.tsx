import './App.css';
import React, { useState, FormEvent } from 'react';

interface Synonym {
  word: string;
  score: number;
}

function App() {
  /**
   * What am I trying to do with this app? 
   *  The purpose of this app is to create a basic thesaurus using Datamuse API
   * 
   * What data do I need? 
   *  - form
   *    --input field
   *    --Search button
   * *   - I will need to save onChange and onSubmit
   */


  //store the data
  const [word, setWord] = useState<string>('');
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);

//handle changes and submissions

  const handleFetchThesaurus = (event: FormEvent) => {
    event.preventDefault();
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((response) => response.json())
      .then((data: Synonym[]) => setSynonyms(data));
  };


//display the data
  return (
    <div className="App">
      <div className="Main-style">
        <form onSubmit={handleFetchThesaurus}>
          <input
            value={word}
            onChange={(event) => setWord(event.target.value)}
            placeholder="Enter Word Here"
          />
          <button type="submit">Find Similar Words!</button>
        </form>

        <ul>
          {synonyms.map((synonym) => (
            <li key={synonym.word}>{synonym.word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

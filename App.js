import React, { useState } from 'react';
import Note from './Note';
import './App.css';


const App = () => {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <h1 style={{ color: 'purple' }}>Notepad App</h1>
      <Note notes={notes} setNotes={setNotes} />
      <ul>
        {notes.map((note, index) => (
          <li key={index} style={{ color: 'purple' }}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


import React, { useState } from 'react';

const Note = ({ notes, setNotes }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Write a note..."
        style={{ color: 'purple' }}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default Note;


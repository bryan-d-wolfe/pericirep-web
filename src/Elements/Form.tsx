import React, { useState, FormEvent } from 'react';

function Form () {
  const [guess, setGuess] = useState('');
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setGuess('Wrong!');
  } 
  return (
    <form>
      <textarea onChange={(e) => setGuess(e.target.value)} value={guess} />
      <button onClick={(e: FormEvent) => handleSubmit(e)}>Submit!</button>
    </form>
  );
}

export default Form;

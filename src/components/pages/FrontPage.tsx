import React from 'react';
import './FrontPage.css';
import Main from '../Main/Main';

function FrontPage () {
  const text: string = "What's the magic word?"; 
  return (
    <div id='FrontPage'>
      <Main title={text} />
    </div>
  );
}

export default FrontPage;

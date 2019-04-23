import React from 'react';
import './FrontPage.css';
import Main from '../components/Main';
import logo from '../logo.svg';

function FrontPage () {
  const text: string = "What's the magic word?";  
  return (
    <div id='FrontPage'>
      <Main title={text} imgSrc={logo} />
    </div>
  );
}

export default FrontPage;

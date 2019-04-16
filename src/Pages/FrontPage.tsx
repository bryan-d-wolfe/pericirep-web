import React from 'react';
import './FrontPage.css';
import Main from '../Page/Main';
import Header from '../Page/Header';
import logo from '../logo.svg';

function FrontPage () {
  const text: string = "What's the magic word?";  
  return (
    <div id='FrontPage'>
      <Header title={text} />
      <Main imgSrc={logo} />
    </div>
  );
}

export default FrontPage;

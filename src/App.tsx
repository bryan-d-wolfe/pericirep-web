import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

function Header() {
  return (
    <header className="App-header">
      <h1>{document.title}</h1>
    </header>
  );
}

function Main() {
  return (
    <main className="App-main">
      <img src={logo} className="App-logo" alt="logo" />
    </main>
  );
}

export default App;

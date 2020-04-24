import React from 'react';
import './App.css';

import MainMenu from './components/MainMenu';

function App() {
  return (
    <div className="App">
      <h1 id="title" style={{backgroundColor: '#DBD9D2'}}>Today's Drink of Choice</h1>
      <MainMenu />
    </div>
  );
}

export default App;

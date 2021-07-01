import React from 'react';
import './App.css';
import IntroNasa from './IntroNasa';
import CountClicks from './CountClicks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <IntroNasa/>
          <CountClicks/>
      </header>
    </div>
  );
}

export default App;

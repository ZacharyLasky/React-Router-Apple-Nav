import React from 'react';
import './App.css';
import NavWrapper from './NavFolder/Nav-Wrapper';
import Reusable from './NavFolder/ReusableNavComponent';

function App() {
  return (
    <div className="App">
      <NavWrapper></NavWrapper>
      <Reusable></Reusable>
    </div>
  );
}

export default App;

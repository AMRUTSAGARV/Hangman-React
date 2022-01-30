import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';

function App() {
  return (
    <>
<Header />
<div className='game-container'>
  <Figure />
</div>
    </>
  );
}

export default App;

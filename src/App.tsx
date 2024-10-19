import React from 'react';
import logo from './logo.svg';
import './App.css';
import HooksState from './components/HooksState';
import HookEffect from './components/HookEffect';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <HooksState/>
      <HookEffect/>
      <Formulario/>
    </div>
  );
}

export default App;

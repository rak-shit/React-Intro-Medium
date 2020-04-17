import React from 'react';
import logo from './logo.svg';
import './App.css';
import Functional from './components/Functional';
import Class from './components/Class';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Functional name="Sam"/>
      <Class name="Mary"/>
      <Counter />
    </div>
  );
}

export default App;

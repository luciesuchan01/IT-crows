import React from 'react'
import './App.css';
import { Header } from './components/common'
import { Cases } from './components/common'
import { About_us } from './components/common'

function App() {
  return (
    <div className="App">
      <Header />,
      <Cases />,
      <About_us />
    </div>

  );
}

export default App;

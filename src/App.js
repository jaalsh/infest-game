import React from 'react';
import './App.css';
import Grid from './components/Grid';
import TileSelector from './components/TileSelector';

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Grid  width={12} height={12}/>
      <TileSelector />
    </div>
  );
}

export default App;

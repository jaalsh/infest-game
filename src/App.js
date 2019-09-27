import React, {useState} from 'react';
import './App.css';
import Grid from './components/Grid';
import TileSelector from './components/TileSelector';

function App() {
  const [selectedTile, setSelectedTile] = useState('conveyor');
  return (
    <div className="App" style={{display: 'flex'}}>
      <Grid  width={12} height={12} selectedTile={selectedTile}/>
      <TileSelector selectedTile={selectedTile} onTileChanged={setSelectedTile} />
    </div>
  );
}

export default App;

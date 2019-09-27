import React, {useState} from 'react';
import './App.css';
import Grid from './components/Grid';
import TileSelector from './components/TileSelector';

function App() {
  const [selectedTile, setSelectedTile] = useState('conveyor');
  return (
    <div className="App" style={{display: 'flex'}}>
      <Grid  width={12} height={12} selectedTile={selectedTile}/>
      <div>
        <TileSelector selectedTile={selectedTile} onTileChanged={setSelectedTile} />
        <button>start the production line</button>
      </div>
    </div>
  );
}

export default App;

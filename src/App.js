import React, {useState} from 'react';
import './App.css';
import Grid from './components/Grid';
import TileSelector from './components/TileSelector';

function App() {
  const [selectedTile, setSelectedTile] = useState({type: 'conveyor', direction: 'left'});
  const [running, setRunning] = useState(false);

  return (
    <div className="App" style={{display: 'flex'}}>
      <Grid running={running} width={12} height={12} selectedTile={selectedTile}/>
      <div>
        <TileSelector selectedTile={selectedTile} onTileChanged={setSelectedTile} />
        <button onClick={() => setRunning(prev => !prev)}>{running ? 'stop' : 'start'} the production line</button>
      </div>
    </div>
  );
}

export default App;

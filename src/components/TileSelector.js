import React from 'react';
import ConveyorTile from './tiles/ConveyorTile';
import FactoryFloorTile from './tiles/FactoryFloorTile';
import MachineTile from './tiles/MachineTile';
import MixingTile from './tiles/MixingTile';

const TileSelector = ({selectedTile, onTileChanged}) => {  
    return <div><div style={{ display: 'flex' }}>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'conveyor' ? 'rgb(220,220,240)' : 'transparent'}} onClick={() => onTileChanged('conveyor')}>
            <ConveyorTile direction="left" />
        </div>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'factory floor' ? 'rgb(220,220,240)' : 'transparent'}} onClick={() => onTileChanged('factory floor')}>
            <FactoryFloorTile />
        </div>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'machine' ? 'rgb(220,220,240)' : 'transparent'}} onClick={() => onTileChanged('machine')}>
            <MachineTile />
        </div>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'mixing' ? 'rgb(220,220,240)' : 'transparent'}} onClick={() => onTileChanged('mixing')}>
            <MixingTile />
        </div>
    </div>
    <div style={{ padding: 5, height: 200}}>
        <textarea style={{width: '100%', height: '100%'}}/>
    </div>
    </div>
}

export default TileSelector;
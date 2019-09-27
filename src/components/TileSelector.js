import React from 'react';
import ConveyorTile from './tiles/ConveyorTile';
import FactoryFloorTile from './tiles/FactoryFloorTile';
import MachineTile from './tiles/MachineTile';
import MixingTile from './tiles/MixingTile';

const TileSelector = ({selectedTile, onTileChanged}) => {  
    return <div style={{ display: 'flex' }}>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'conveyor' ? 'red' : 'transparent'}} onClick={() => onTileChanged('conveyor')}>
            <ConveyorTile direction="left" />
        </div>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'factory floor' ? 'red' : 'transparent'}} onClick={() => onTileChanged('factory floor')}>
            <FactoryFloorTile />
        </div>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'machine' ? 'red' : 'transparent'}} onClick={() => onTileChanged('machine')}>
            <MachineTile />
        </div>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'mixing' ? 'red' : 'transparent'}} onClick={() => onTileChanged('mixing')}>
            <MixingTile />
        </div>
    </div>
}

export default TileSelector;
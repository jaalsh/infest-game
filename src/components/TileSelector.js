import React, { useState } from 'react';
import ConveyorTile from './tiles/ConveyorTile';
import FactoryFloorTile from './tiles/FactoryFloorTile';
import MachineTile from './tiles/MachineTile';
import MixingTile from './tiles/MixingTile';

const TileSelector = () => {
    const [selectedTile, setSelectedTile] = useState('conveyor')    
    return <div style={{ display: 'flex' }}>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'conveyor' ? 'red' : 'transparent'}} onClick={() => setSelectedTile('conveyor')}>
            <ConveyorTile direction="left" />
        </div>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'factory floor' ? 'red' : 'transparent'}} onClick={() => setSelectedTile('factory floor')}>
            <FactoryFloorTile />
        </div>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'machine' ? 'red' : 'transparent'}} onClick={() => setSelectedTile('machine')}>
            <MachineTile />
        </div>
        <div style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === 'mixing' ? 'red' : 'transparent'}} onClick={() => setSelectedTile('mixing')}>
            <MixingTile />
        </div>
    </div>
}

export default TileSelector;
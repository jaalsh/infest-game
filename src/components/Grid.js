import React, {useState, useEffect} from 'react';
import FactoryFloorTile from './tiles/FactoryFloorTile';
import ConveyorTile from './tiles/ConveyorTile';
import MachineTile from './tiles/MachineTile';
import MixingTile from './tiles/MixingTile';

const getTile = (type) => {
    if(type === 'conveyor') {
        return <ConveyorTile direction="left" />
    }
    if(type === 'factory floor') {
        return <FactoryFloorTile />
    }
    if(type === 'machine') {
        return <MachineTile />
    }
    if(type === 'mixing') {
        return <MixingTile />
    }
}

const Grid = ({ width, height, selectedTile }) => {
    const [tiles, setTiles] = useState(new Array(width * height).fill(null).map(() => <FactoryFloorTile />));

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${width}, 64px)`,
            gridTemplateRows: `repeat(${height}, 64px)`
        }}>
            {(tiles || []).map((t, i) => 
                <div key={i} style={{ gridColumn: (i % width) + 1, gridRow: Math.floor(i / width) + 1, cursor:'pointer'}} onClick={() => setTiles((prev => prev.map((item, index) => index === i ? getTile(selectedTile): item)))}>
                    {t}
                </div>)}
        </div>
    )
};

export default Grid;
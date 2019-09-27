import React, {useState, useEffect} from 'react';
import FactoryFloorTile from './tiles/FactoryFloorTile';

const Grid = ({ width, height }) => {
    const [tiles, setTiles] = useState(new Array(width * height).fill(null).map(() => <FactoryFloorTile />));

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${width}, 64px)`,
            gridTemplateRows: `repeat(${height}, 64px)`
        }}>
            {(tiles || []).map((t, i) => 
                <div key={i} style={{ gridColumn: (i % width) + 1, gridRow: Math.floor(i / width) + 1}}>
                    {t}
                </div>)}
        </div>
    )
};

export default Grid;
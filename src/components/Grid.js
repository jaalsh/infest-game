import React, {useState, useEffect} from 'react';
import ConfigurableTile from './ConfigurableTile';

const getTile = (config) => {
    console.log(config)
    return <ConfigurableTile config={config}/>;
}

const Grid = ({ width, height, selectedTile }) => {
    const [tiles, setTiles] = useState(new Array(width * height).fill(null).map(() => <ConfigurableTile config={{type: 'factory'}}/>));

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
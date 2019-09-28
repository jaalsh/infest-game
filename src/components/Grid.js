import React, {useState, useEffect} from 'react';
import ConfigurableTile from './ConfigurableTile';
import GameObject from './objects/GameObject';
import useInterval from '../hooks/useInterval';

const getTile = (config) => {
    return <ConfigurableTile config={config}/>;
}

const process = (config, object, index, width) => {
    if(config.type === 'conveyor' && object) {
        switch(config.direction) {
            case 'right': 
                return index + 1;
            case 'left':
                return index - 1;
            case 'up':
                return index - width;
            case 'down':
                return index + width;
            default:
                return index;
        };
    }
    return index;
}

const Grid = ({ width, height, selectedTile }) => {
    const [tiles, setTiles] = useState(new Array(width * height).fill(null).map(() => ({type: 'factory'})));
    const [objects, setObjects] = useState(new Array(width * height).fill(null).map((o, i) => i === 0 ? <GameObject objectImageName="eggs" /> : o));

    useInterval(() => {
        const newArray = new Array(width * height).fill(null)
        for(let i = 0; i < tiles.length; i++) {
            const currentTile = tiles[i];
            const currentObject = objects[i];
            if(currentTile) {
                const newIndex = process(currentTile, currentObject, i, width);
                if(currentObject) {
                    newArray[newIndex] = currentObject;
                }
            }
        }
        setObjects(newArray);
    }, 500);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${width}, 64px)`,
            gridTemplateRows: `repeat(${height}, 64px)`
        }}>
            {(tiles || []).map((t, i) => 
                <div key={i} style={{ gridColumn: (i % width) + 1, gridRow: Math.floor(i / width) + 1, cursor:'pointer'}} onClick={() => setTiles((prev => prev.map((item, index) => index === i ? selectedTile: item)))}>
                    {getTile(t)}
                </div>
            )}

            {(objects || []).map((o, i) => 
                <div key={i} style={{ gridColumn: (i % width) + 1, gridRow: Math.floor(i / width) + 1, cursor:'pointer'}}>
                    {o}
                </div>
            )}
        </div>
    )
};

export default Grid;
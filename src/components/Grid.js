import React, {useState} from 'react';
import ConfigurableTile from './ConfigurableTile';
import useInterval from '../hooks/useInterval';

const getTile = (config, object) => {
    return <ConfigurableTile config={config} object={object} />;
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

// list of recipes

const mixing = (objects) => {
    ///1 object return object
    // 2 objects
    // cake mix and eggs - cake batter mix
    // cake icing - cake with icing
    // cake sprinkles - cake with sprinkles

    // any 2 other, or 2 or more and isn't a recipe. output ruined or fail??
}

const Grid = ({ width, height, selectedTile, running }) => {
    const [tiles, setTiles] = useState(new Array(width * height).fill(null).map(() => ({type: 'factory'})));
    const [objects, setObjects] = useState(new Array(width * height).fill(null).map((o, i) => i === 0 ? "eggs" : o));

    useInterval(() => {
        if(!running) { 
            return;
        }
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
                    {getTile(t, objects[i])}
                </div>
            )}

        </div>
    )
};

export default Grid;
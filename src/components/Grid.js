import React, {useState} from 'react';
import ConfigurableTile from './ConfigurableTile';
import useInterval from '../hooks/useInterval';

const getTile = (config, object) => {
    return <ConfigurableTile config={config} object={object} />;
}

const process = (config, object, index, width, arrayLength, instructions) => {
    if(config.type === 'conveyor' && object) {
        let newIndex = index;
        switch(config.direction) {
            case 'right': 
                newIndex = index + 1;
                break;
            case 'left':
                newIndex =index - 1;
                break;
            case 'up':
                newIndex = index - width;
                break;
            case 'down':
                newIndex = index + width;
                break;
            default:
                break
        };
        if(outsideBounds(newIndex, index, config.direction, arrayLength, width)) {
            return null;
        }
        return newIndex;
    }
    if(config.type === 'mixer') {
        if(instructions.length) {
            const nextInstruction = instructions[0];
            return processInstruction(nextInstruction, index);
        }
    }
    return index;
}

const processInstruction = (nextInstruction, index) => {

}

const outsideBounds = (newIndex, oldIndex, direction, length, width) => {
    if(newIndex < 0 || newIndex >= length) {
        return true;
    }
    if(direction === 'left' || direction === 'right') {
        return isOnDifferentLine(newIndex, oldIndex, width);
    }
    return false;
}

const isOnDifferentLine = (newIndex, oldIndex, width) => {
    return (Math.floor(newIndex / width) !== Math.floor(oldIndex / width));
}

const Grid = ({ width, height, selectedTile, running }) => {
    const [tiles, setTiles] = useState(new Array(width * height).fill(null).map(() => ({type: 'factory'})));
    const [objects, setObjects] = useState(new Array(width * height).fill([]).map((o, i) => i === 0 ? ["eggs"] : o));
    const [instructions, setInstructions] = useState(new Array(width * height).fill([]));

    useInterval(() => {
        if(!running) { 
            return;
        }
        const newArray = new Array(width * height).fill(null)
        for(let i = 0; i < tiles.length; i++) {
            const currentTile = tiles[i];
            const currentObject = objects[i];
            if(currentTile) {
                const newIndex = process(currentTile, currentObject, i, width, newArray.length, instructions[i]);
                if(currentObject && newIndex !== null) {
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
import React, {useState} from 'react';
import ConfigurableTile from './ConfigurableTile';
import useInterval from '../hooks/useInterval';

const getTile = (config, objects) => {
    return <ConfigurableTile config={config} objects={objects} />;
}

const getNewIndex = (direction, index, width, arrayLength) => {
    let newIndex = index;
    switch(direction) {
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
    if(outsideBounds(newIndex, index, direction, arrayLength, width)) {
        return null;
    }
    return newIndex;
}

const process = (config, object, index, width, arrayLength, instructions) => {
    if(config.type === 'conveyor' && object) {
        return getNewIndex(config.direction, index, width, arrayLength)
    }
    if(config.type === 'mixing') {
        console.log(instructions);
        if(instructions.length) {
            const nextInstruction = instructions[0];
            return processInstruction(nextInstruction, index, width, arrayLength);
        }
    }
    return index;
}

const processInstruction = (nextInstruction, index, width, arrayLength) => {
    if(nextInstruction.type === 'output') {
        console.log('output', nextInstruction, getNewIndex(nextInstruction.direction, index, width, arrayLength))
        return getNewIndex(nextInstruction.direction, index, width, arrayLength);
    }
    return index;

const recipes = [
    { ingredients: ["eggs", "cake_mix"], output: "batter" },
    { ingredients: ["cupcakes", "icing"], output: "cupcakes_with_icing" },
    { ingredients: ["cupcakes", "sprinkles"], output: "batter_with_sprinkles" }
]

const mixing = (objects) => {
    if (objects && objects.length) {
        if (objects.length === 1) return objects[0];

        for (var i = 0; i = recipes.length; i++) {
            var ingredients = recipes[i].ingredients;
            var validRecipeExists = objects.every(o => ingredients.includes(o));
            if (validRecipeExists) {
                return recipes[i].output;
            }
        }

        return "ruined_food"
    }
}

const processInstruction = (nextInstruction, index) => {

>>>>>>> 0451420be680bcbbd872741652a9104ea4a64b1c
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
        const newArray = new Array(width * height).fill(null);
        const newInstructions = new Array(width * height).fill([]);
        for(let i = 0; i < tiles.length; i++) {
            const currentTile = tiles[i];
            const currentObject = objects[i];
            const currentInstructionSet = instructions[i];
            if(currentTile) {
                if(currentInstructionSet.length === 0 && currentObject && currentTile.instructions) {
                    newInstructions[i] = currentTile.instructions;
                } else if(currentInstructionSet.length > 0) {
                    newInstructions[i] = currentInstructionSet.filter((_, index) => index !== 0)
                }
                const newIndex = process(currentTile, currentObject, i, width, newArray.length, newInstructions[i]);
                if(currentObject && newIndex !== null) {
                    newArray[newIndex] = currentObject;
                }
            }
        }
        setObjects(newArray);
        setInstructions(newInstructions);
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
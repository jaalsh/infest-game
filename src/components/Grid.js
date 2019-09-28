import React, {useState} from 'react';
import ConfigurableTile from './ConfigurableTile';
import useInterval from '../hooks/useInterval';
import usePrevious from '../hooks/usePrevious';

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

const process = (config, objects, index, width, arrayLength, instructions) => {
    if(config.type === 'conveyor' && objects && objects.length) {
        return { objects, index: getNewIndex(config.direction, index, width, arrayLength) }
    }
    if(instructions.length) {
        const nextInstruction = instructions[0];
        return processInstruction(nextInstruction, index, width, arrayLength, config.type, objects);
    }
    return {objects, index };
}

const processInstruction = (nextInstruction, index, width, arrayLength, type, objects) => {
    if(nextInstruction.type === 'output') {
        return {objects, index: getNewIndex(nextInstruction.direction, index, width, arrayLength)};
    }
    if(nextInstruction.type === 'run') {
        if(type === 'mixing') {
            return {objects: mix(objects), index}
        }
        if(type === 'cooking') {
            return {objects: cook(objects), index}
        }
    }
    return { objects, index };
}

const recipes = [
    { ingredients: ["eggs", "cake_mix"], output: "batter" },
    { ingredients: ["cupcakes", "icing"], output: "cupcakes_with_icing" },
    { ingredients: ["cupcakes", "sprinkles"], output: "cupcakes_with_sprinkles" }
];

const cooking = [
    { ingredient: "batter", output: "cupcakes" }
];

const arrayEquals = (a, b) => {
    if (a.length !== b.length) {
      return false
    }
    const aSorted = a.sort()
    const bSorted = b.sort()
  
  
    return aSorted
      .map((val, i) => bSorted[i] === val)
      .every(isSame => isSame)
  }

const mix = (objects) => {
    if (objects && objects.length) {
        if (objects.length === 1) return objects;

        const validRecipe = recipes.find(r => arrayEquals(r.ingredients, objects));
        if(validRecipe) {
            return [validRecipe.output];
        }

        return ["ruined_food"]
    }
}

const cook = (objects) => {
    if (objects && objects.length) {
        if (objects.length === 1) {
            const validCooking = cooking.find(c => c.ingredient === objects[0]);
            if (validCooking) {
                return [validCooking.output];
            }
        }

        return ["ruined_food"]
    }
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
    const initialObjectState = new Array(width * height).fill([]).map((o, i) => i === 0 || i === 2 ? ["eggs"] : i === 5 || i === 18 ? ["cake_mix"] : i === 34 ? ["sprinkles"] : i === 49 ? ["icing"] : o);

    const [tiles, setTiles] = useState(new Array(width * height).fill(null).map(() => ({type: 'factory'})));
    const [objects, setObjects] = useState(initialObjectState);
    const [instructions, setInstructions] = useState(new Array(width * height).fill([]));

    const prevRunning = usePrevious(running);


    useInterval(() => {
        
        if(!running) {
            if(prevRunning) {
                setObjects(initialObjectState);
            }
            return;
        }
        
        const newArray = new Array(width * height).fill([]);
        const newInstructions = new Array(width * height).fill([]);
        for(let i = 0; i < tiles.length; i++) {
            const currentTile = tiles[i];
            const currentObjects = objects[i];
            const currentInstructionSet = instructions[i];
            if(currentTile) {
                if(currentTile.type === 'cooking') {
                    console.log(currentTile.instructions, currentInstructionSet)
                }
                if(currentInstructionSet.length === 0 && currentObjects && currentObjects.length && currentTile.instructions) {
                    newInstructions[i] = currentTile.instructions;
                } else if(currentInstructionSet.length > 0) {
                    newInstructions[i] = currentInstructionSet.filter((_, index) => index !== 0)
                }
                const newState = process(currentTile, currentObjects, i, width, newArray.length, newInstructions[i]);

                if(newState.objects && newState.objects.length && newState.index !== null) {
                    console.log(`setting index ${newState.index} to ${JSON.stringify(newState.objects)}`);
                    newArray[newState.index] = [...newArray[newState.index], ...newState.objects];
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
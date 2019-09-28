import React from 'react';
import DirectionSelect from './DirectionSelect';

const getInstruction = (type, instruction) => {
    if(type === 'output') {
        return { type, direction: instruction.direction }
    } else {
        return { type }
    }
}

const InstructionConfig = ({ instruction, onInstructionChange, onRemove, number, options}) => (
    <div>
        {number}.
        <select value={instruction.type} onChange={(e) => onInstructionChange(getInstruction(e.target.value, instruction))}>
            {options.map(o => {return <option value={o}>{o}</option>})}
        </select>
        {instruction.type === 'output' ? <DirectionSelect direction={instruction.direction} onDirectionChange={(direction) => onInstructionChange({...instruction, direction})} /> : null}
        <button onClick={() => onRemove()}>delete</button>
    </div>
);

export default InstructionConfig;
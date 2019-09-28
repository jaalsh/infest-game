import React from 'react';
import InstructionConfig from './InstructionConfig';

const defaultInstruction = {
    type: 'output',
    direction: 'up'
}

const MachineConfig = ({ config, onConfigChange, options}) => (
    <div>
        {(config.instructions || []).map((instruction, i) => <InstructionConfig key={i}
            number={i + 1}
         instruction={instruction} 
         onInstructionChange={(newInstruction) => onConfigChange({ instructions: (config.instructions || []).map((old, index) => index === i ? newInstruction : old)})}
         onRemove={() => onConfigChange({instructions: config.instructions.filter((_, index) => index !== i)})}
         options={options || ["output", "run", "wait"]}
         />)}
        <button onClick={() => onConfigChange({ instructions: [...config.instructions, defaultInstruction]})}>Add instruction</button>
    </div>
);

export default MachineConfig
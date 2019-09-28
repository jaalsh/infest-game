import React from 'react';
import DirectionSelect from './DirectionSelect';

const ConveyorConfig = ({ config, onConfigChange }) => (
    <div>
       <label>Direction: </label>
        <DirectionSelect direction={config.instructions[0].direction} onDirectionChange={(direction) => onConfigChange({ instructions: [{ type: 'output', direction}] })} />
    </div>
)

export default ConveyorConfig;
import React from 'react';
import DirectionSelect from './DirectionSelect';

const ConveyorConfig = ({ config, onConfigChange }) => (
    <div>
       <label>Direction: </label>
        <DirectionSelect direction={config.direction} onDirectionChange={(direction) => onConfigChange({ direction })} />
    </div>
)

export default ConveyorConfig;
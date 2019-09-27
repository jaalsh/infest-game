import React from 'react';

const DirectionSelect = ({ direction, onDirectionChange}) => (
    <select value={direction} onChange={(e) => onDirectionChange(e.target.value)}>
        <option value="up">up</option>
        <option value="right">right</option>
        <option value="down">down</option>
        <option value="left">left</option>
    </select>
);

export default DirectionSelect;
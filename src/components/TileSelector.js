import React from 'react';
import ConfigurableTile from './ConfigurableTile'

var tileConfigs = [
    {name: 'conveyorUp', type: 'conveyor', direction: 'up'},
    {name: 'conveyorRight', type: 'conveyor', direction: 'right'},
    {name: 'conveyorDown', type: 'conveyor', direction: 'down'},
    {name: 'conveyorLeft', type: 'conveyor', direction: 'left'},
    {name: 'machine', type: 'machine'},
    {name: 'mixing', type: 'mixing'},
    {name: 'power', type: 'power'},
    {name: 'factory', type: 'factory_tile'}
];

const TileSelector = ({selectedTile, onTileChanged}) => {  
    return <div style={{ display: 'flex' }}>
        {tileConfigs.map((t, i) => {
            return (
            <div key={i} style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile === t.name ? 'red' : 'transparent'}} onClick={() => onTileChanged(t)}>
                <ConfigurableTile config={t} />
            </div>)
        })}
    </div>
}

export default TileSelector;
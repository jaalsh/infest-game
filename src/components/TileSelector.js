import React from 'react';
import ConfigurableTile from './ConfigurableTile'

var tileConfigs = [
    {name: 'conveyorUp', type: 'conveyor', direction: 'up'},
    {name: 'machine', type: 'machine'},
    {name: 'mixing', type: 'mixing'},
    {name: 'power', type: 'power'},
    {name: 'factory', type: 'factory_tile'}
];

const TileSelector = ({selectedTile, onTileChanged}) => {  
    return <div><div style={{ display: 'flex' }}>
        {tileConfigs.map((t, i) => {
            return (
            <div key={i} style={{padding: 5, cursor: 'pointer', backgroundColor: selectedTile.type === t.type ? 'red' : 'transparent'}} onClick={() => onTileChanged(t)}>
                <ConfigurableTile config={t} />
            </div>)
        })}
    </div>
    <div style={{ padding: 5, height: 200}}>
        <textarea style={{width: '100%', height: '100%'}}/>
    </div>
    </div>
}

export default TileSelector;
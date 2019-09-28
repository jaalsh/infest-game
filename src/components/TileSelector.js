import React from 'react';
import ConfigurableTile from './ConfigurableTile';
import ConveyorConfig from './configs/ConveyorConfig';
import MachineConfig from './configs/MachineConfig';

var tileConfigs = [
    {name: 'conveyorUp', type: 'conveyor', instructions: [{type: 'output', direction: 'up'}]},
    {name: 'machine', type: 'machine', instructions: []},
    {name: 'mixing', type: 'mixing', instructions:  []},
    {name: 'cooking', type: 'cooking', instructions: []},
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
            {selectedTile.type === 'conveyor' ? <ConveyorConfig config={selectedTile} onConfigChange={(config) => onTileChanged({ ...selectedTile, ...config })} /> : 
            selectedTile.type === 'mixing' || selectedTile.type === 'cooking' ? <MachineConfig config={selectedTile} onConfigChange={(config) => onTileChanged({ ...selectedTile, ...config })} /> 
            : selectedTile.type === 'machine' ? <MachineConfig options={["output", "wait"]} config={selectedTile} onConfigChange={(config) => onTileChanged({ ...selectedTile, ...config })} /> : null}
        </div>
    </div>
}

export default TileSelector;
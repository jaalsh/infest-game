import React from 'react';
import FactoryTile from './tiles/FactoryTile';
import ConveyorTile from './tiles/ConveyorTile';
import MachineTile from './tiles/MachineTile';
import MixingTile from './tiles/MixingTile';
import PowerTile from './tiles/PowerTile';

const ConfigurableTile = ({ config }) => {
    const getTileToRender = () => {
        switch (config.type){
            case 'conveyor':
                return <ConveyorTile config={config} />
            case 'machine':
                return <MachineTile config={config} />
            case 'mixing':
                return <MixingTile config={config} />
            case 'power':
                return <PowerTile config={config} />
            default:
                return <FactoryTile config={config} />
        }
    }

    return getTileToRender()
  };


  export default ConfigurableTile;

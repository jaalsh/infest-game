import React from 'react';
import FactoryTile from './tiles/FactoryTile';
import ConveyorTile from './tiles/ConveyorTile';
import MachineTile from './tiles/MachineTile';
import MixingTile from './tiles/MixingTile';
import CookingTile from './tiles/CookingTile';

const ConfigurableTile = ({ config, object }) => {
    const getTileToRender = () => {
        switch (config.type){
            case 'conveyor':
                return <ConveyorTile config={config} object={object} />
            case 'machine':
                return <MachineTile config={config} object={object} />
            case 'mixing':
                return <MixingTile config={config} object={object} />
            case 'cooking':
                return <CookingTile config={config} object={object} />
            default:
                return <FactoryTile config={config} object={object} />
        }
    }

    return getTileToRender()
  };


  export default ConfigurableTile;

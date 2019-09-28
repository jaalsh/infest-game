import React from 'react';
import FactoryTile from './tiles/FactoryTile';
import ConveyorTile from './tiles/ConveyorTile';
import MachineTile from './tiles/MachineTile';
import MixingTile from './tiles/MixingTile';
import CookingTile from './tiles/CookingTile';

const ConfigurableTile = ({ config, objects }) => {
    const getTileToRender = () => {
        switch (config.type){
            case 'conveyor':
                return <ConveyorTile config={config} objects={objects} />
            case 'machine':
                return <MachineTile config={config} objects={objects} />
            case 'mixing':
                return <MixingTile config={config} objects={objects} />
            case 'cooking':
                return <CookingTile config={config} objects={objects} />
            default:
                return <FactoryTile config={config} objects={objects} />
        }
    }

    return getTileToRender()
  };


  export default ConfigurableTile;

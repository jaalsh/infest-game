import React from 'react';
import Tile from './Tile'

const ConveyorTile = ({ config, objects }) => {
    return (
        <Tile imageName={`conveyor_${config.instructions[0].direction}`} config={config} objectImageNames={objects}/>
    );
  };

  export default ConveyorTile;

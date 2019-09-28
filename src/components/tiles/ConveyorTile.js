import React from 'react';
import Tile from './Tile'

const ConveyorTile = ({ config }) => {
    return (
        <Tile imageName={`conveyor_${config.direction}`} config={config}/>
    );
  };

  export default ConveyorTile;

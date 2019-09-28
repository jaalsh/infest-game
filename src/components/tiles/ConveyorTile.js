import React from 'react';
import Tile from './Tile'

const ConveyorTile = ({ config, object }) => {
    return (
        <Tile imageName={`conveyor_${config.direction}`} config={config} objectImageName={object}/>
    );
  };

  export default ConveyorTile;

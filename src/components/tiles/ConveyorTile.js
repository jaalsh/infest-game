import React from 'react';
import Tile from './Tile'

const ConveyorTile = ({direction}) => {
    return (
        <Tile imageName={`conveyor_${direction}.png`}/>
    );
  };

  export default ConveyorTile;

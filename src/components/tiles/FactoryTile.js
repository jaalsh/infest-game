import React from 'react';
import Tile from './Tile'

const FactoryTile = ({config}) => {
    return (
        <Tile imageName='factory_tile' config={config}/>
    );
  };

  export default FactoryTile;

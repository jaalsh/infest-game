import React from 'react';
import Tile from './Tile'

const FactoryTile = ({config, objects}) => {
    return (
        <Tile imageName='factory_tile' config={config} objectImageNames={objects}/>
    );
  };

  export default FactoryTile;

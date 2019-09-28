import React from 'react';
import Tile from './Tile'

const FactoryTile = ({config, object}) => {
    return (
        <Tile imageName='factory_tile' config={config} objectImageName={object}/>
    );
  };

  export default FactoryTile;

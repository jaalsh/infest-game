import React from 'react';
import Tile from './Tile'

const CookingTile = ({config, objects}) => {
    return (
        <Tile imageName='cooking' config={config} objectImageNames={objects}/>
    );
  };

  export default CookingTile;

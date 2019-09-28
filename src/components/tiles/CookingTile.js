import React from 'react';
import Tile from './Tile'

const CookingTile = ({config, objects}) => {
    return (
        <Tile imageName={objects && objects.length ? 'cooking_green' : 'cooking'} config={config}/>
    );
  };

  export default CookingTile;

import React from 'react';
import Tile from './Tile'

const CookingTile = ({config, object}) => {
    return (
        <Tile imageName='cooking' title={config.instructions.map(i => JSON.stringify(i)).join("\r\n")} config={config} objectImageName={object}/>
    );
  };

  export default CookingTile;

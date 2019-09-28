import React from 'react';
import Tile from './Tile'

const MixingTile = ({ config, objects }) => {
    return (
        <Tile imageName='mixing' objectImageNames={objects} config={config}/>
    );
  };

  export default MixingTile;

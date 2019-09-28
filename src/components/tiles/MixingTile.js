import React from 'react';
import Tile from './Tile'

const MixingTile = ({ config, objects }) => {
    return (
        <Tile imageName={objects && objects.length ? 'mixing_green' : 'mixing'} config={config} />
    );
  };

  export default MixingTile;

import React from 'react';
import Tile from './Tile'

const MixingTile = ({ config }) => {
    return (
        <Tile imageName='mixing' title={config.instructions.map(i => JSON.stringify(i)).join("\r\n")} />
    );
  };

  export default MixingTile;

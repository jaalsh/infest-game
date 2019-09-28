import React from 'react';
import Tile from './Tile'

const MixingTile = ({ config, object }) => {
    return (
        <Tile imageName='mixing' objectImageName={object} title={config.instructions.map(i => JSON.stringify(i)).join("\r\n")} config={config}/>
    );
  };

  export default MixingTile;

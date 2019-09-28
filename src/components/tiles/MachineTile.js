import React from 'react';
import Tile from './Tile'

const MachineTile = ({config, objects}) => {
    return (
        <Tile imageName={objects && objects.length ? 'machine_green' : 'machine'}  config={config}/>
    );
  };

  export default MachineTile;

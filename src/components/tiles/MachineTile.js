import React from 'react';
import Tile from './Tile'

const MachineTile = ({config, objects}) => {
    return (
        <Tile imageName='machine' config={config} objectImageNames={objects}/>
    );
  };

  export default MachineTile;

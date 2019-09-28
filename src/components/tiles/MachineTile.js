import React from 'react';
import Tile from './Tile'

const MachineTile = ({config, object}) => {
    return (
        <Tile imageName='machine' config={config} objectImageName={object}/>
    );
  };

  export default MachineTile;

import React from 'react';

const dimension = '64px'

const Tile = ({ imageUrl }) => {
    return (
        <img src={imageUrl} width={dimension} height={dimension} />
    );
  };

  export default Tile;
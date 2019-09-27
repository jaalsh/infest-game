import React from 'react';

const dimension = '64px'

const tileStyle = {
    zIndex: 'auto',
    position: 'relative'
};

const Tile = ({ imageName }) => {
    const imageSource = `${process.env.PUBLIC_URL}/assets/images/tiles/${imageName}.png`

    return (
        <img style={tileStyle} src={imageSource} width={dimension} height={dimension} alt="base_tile" />
    );
  };

  export default Tile;
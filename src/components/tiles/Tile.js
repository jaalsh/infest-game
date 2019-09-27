import React from 'react';

const dimension = '64px'

const Tile = ({ imageName }) => {
    const imageSource = `${process.env.PUBLIC_URL}/assets/images/tiles/${imageName}`

    return (
        <img src={imageSource} width={dimension} height={dimension} />
    );
  };

  export default Tile;
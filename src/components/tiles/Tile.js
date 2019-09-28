import React from 'react';
import GameObject from '../objects/GameObject';

const dimension = '64px'

const tileStyle = {
    zIndex: 'auto',
    position: 'relative'
};

const Tile = ({ imageName, title, objectImageName }) => {
    const imageSource = `${process.env.PUBLIC_URL}/assets/images/tiles/${imageName}.png`

    return (
        <>
            <img style={tileStyle} src={imageSource} width={dimension} height={dimension} alt="base_tile" title={title} />
            <GameObject objectImageName={config.objectImageName} />
        </>
    );
  };

  export default Tile;


  
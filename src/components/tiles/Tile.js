import React from 'react';
import GameObject from '../objects/GameObject';

const dimension = '64px'


const Tile = ({ imageName, title, objectImageName }) => {
    const imageSource = `${process.env.PUBLIC_URL}/assets/images/tiles/${imageName}.png`

    return (
        <div style={{ position: 'relative' }}>
            <img src={imageSource} width={dimension} height={dimension} alt="base_tile" title={title} />
            {objectImageName && <GameObject style={{position: 'absolute', left: 0}} objectImageName={objectImageName} width={dimension} height={dimension}  />}
        </div>
    );
  };

  export default Tile;


  
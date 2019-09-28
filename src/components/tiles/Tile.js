import React from 'react';
import GameObject from '../objects/GameObject';

const dimension = '64px'

const Tile = ({ imageName, objectImageNames, config }) => {
    const imageSource = `${process.env.PUBLIC_URL}/assets/images/tiles/${imageName}.png`

    return (
        <div style={{ position: 'relative' }}>
            <img src={imageSource} width={dimension} height={dimension} alt="base_tile" title={config.instructions ? config.instructions.map(i => JSON.stringify(i)).join("\r\n") : "no instructions"} />
            {objectImageNames && objectImageNames.length > 0 && <GameObject style={{position: 'absolute', left: 0}} objectImageName={objectImageNames[0]} width={dimension} height={dimension}  />}
        </div>
    );
  };

  export default Tile;


  
import React from 'react';

const dimension = '64px'


const GameObject = ({ style, objectImageName }) => {
    const imageSource = `${process.env.PUBLIC_URL}/assets/images/objects/${objectImageName}.png`

    return (
        <img style={style} src={imageSource} width={dimension} height={dimension} alt="game_object" />
    );
  };

export default GameObject
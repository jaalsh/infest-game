import React from 'react';
import { defaultCipherList } from 'constants';

const dimension = '64px'

const objectStyle = {
    zIndex: 1,
    position: 'relative'
};

const GameObject = ({ objectImageName }) => {
    const imageSource = `${process.env.PUBLIC_URL}/assets/images/objects/${objectImageName}.png`

    return (
        <img style={objectStyle} src={imageSource} width={dimension} height={dimension} alt="conveyor_object" />
    );
  };

export default GameObject
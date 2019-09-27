import React from 'react';
import Tile from './Tile'
import ConveyorBeltObject from '../objects/ConveyorBeltObject'

const ConveyorTile = ({ config }) => {
    const renderObject = () => {
        return 'objectImageName' in config ? <ConveyorBeltObject objectImageName={config.objectImageName}/> : null;
    }

    return (
        <>
            <Tile imageName={`conveyor_${config.direction}`}/>
            {renderObject()}
        </>
    );
  };

  export default ConveyorTile;

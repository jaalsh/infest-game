import React from 'react';
import Tile from './Tile'
import ConveyorBeltObject from '../objects/ConveyorBeltObject'

const ConveyorTile = ({ direction, objectImageName }) => {
    const renderObject = () => {
        return objectImageName ? <ConveyorBeltObject objectImageName={objectImageName}/> : null;
    }

    return (
        <>
            <Tile imageName={`conveyor_${direction}.png`}/>
            {renderObject()}
        </>
    );
  };

  export default ConveyorTile;

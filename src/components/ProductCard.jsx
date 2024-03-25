import { Card, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function ProductCard({nombre, sabor, marca, calorias, onClick}) {
    return (
        <Card
        bg={'#FDCDFF'} p={'3px'} my={'7px'} onClick={onClick}>
            <Heading>{nombre}</Heading>
            <Text>Sabor: {sabor}</Text>
            <Text>Marca: {marca}</Text>
            <Text>{calorias} calorias</Text>
        </Card>
    );
}

export default ProductCard;
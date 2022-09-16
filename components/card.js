import React from 'react';
import { Box, Text } from '../components/ui'
import '../public/factory-data/data.json'

const Card = ({ card, ...props }) => {
    return (
        <Box h='10em' w='10em' bgColor='red'>
            <Text>{card?.name}</Text>
        </Box>
    );
};

export default Card;
import React, { useMemo } from 'react';
import { Collapse, Box, Flex, Text, Stack, HStack, Icon, Divider } from './ui'
import materialData from '../public/factory-data/data.json'
import { filter, flatten, includes, map, prop } from 'ramda';

const RecipesCollapse = ({title, children, isOpen, setIsOpen, ...props}) => {
    return (
        <Stack p='4' {...props}>
            <HStack
                justifyContent='space-between'
                cursor='pointer'
                onClick={() => setIsOpen()}
            >
                <Text>{title}</Text>
                <Box color='black'>
                    <Icon icon={isOpen ? 'chevron-up' : 'chevron-down'} />
                </Box>
            </HStack>
            <Collapse in={isOpen} animateOpacity>
                <Divider />
                {children}
            </Collapse>
        </Stack>
    );
};

export default RecipesCollapse;
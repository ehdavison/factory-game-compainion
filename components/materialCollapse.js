import React, { useMemo } from 'react';
import { Collapse, Box, Flex, Text, Stack } from './ui'
import materialData from '../public/factory-data/data.json'
import { filter, flatten, includes, map, prop } from 'ramda';

const MaterialCollapse = ({material}) => {

    const recipes = useMemo(() => {
        const keyName = material?.key_name
        console.log('keyName MOTHERFUCKER:',material?.key_name)
        const items = filter(k => {
            // console.log('prop ingredients:', prop(['ingredients'], k))
            return includes(keyName, flatten(prop(['ingredients'], k)))
        }, materialData.recipes)
        return items
    },[materialData.recipes, material])

    console.log('recipes', recipes)

    

    return (
        <Collapse 
            in={material} 
            animateOpacity
        >
            <Box>
                <Stack>
                    <Text>Recipes using {material?.name}</Text>
                    {recipes?.map((recipe, i) => (
                        <Text>{recipe?.name}</Text>
                    ))}
                </Stack>
            </Box>
        </Collapse>
    );
};

export default MaterialCollapse;
import React, { useMemo, useState } from 'react';
import { Collapse, Box, Flex, Text, Stack } from './ui'
import materialData from '../public/factory-data/data.json'
import { filter, flatten, includes, map, prop } from 'ramda';
import RecipesCollapse from './recipesCollapse';

const MaterialCollapse = ({material}) => {

    const [recipeIsOpen, setRecipeIsOpen] = useState(null);

    const recipes = useMemo(() => {
        const keyName = material?.key_name
        console.log('keyName MOTHERFUCKER:',material?.key_name)
        const items = filter(k => {
            // console.log('prop ingredients:', prop(['ingredients'], k))
            return includes(keyName, flatten(prop(['ingredients'], k)))
        }, materialData.recipes)
        return items
    },[materialData.recipes, material]);

    console.log('recipes', recipes)

    

    return (
        <Collapse 
            in={material} 
            animateOpacity
        >
            <Box
                bgColor='white'
                p='2'
                rounded='2px'
            >
                <Stack>
                    <Text>Recipes using {material?.name}</Text>
                    {recipes?.map((recipe, i) => {
                        const isOpen = recipe?.name === recipeIsOpen;
                        return ( 
                        <RecipesCollapse
                            title={recipe?.name}
                            isOpen={isOpen}
                            setIsOpen={() => setRecipeIsOpen(isOpen ? null : recipe?.name)}
                        >
                            <Text>Ingredients: {recipe?.ingredients}</Text>

                        </RecipesCollapse>
                    )})}
                </Stack>
            </Box>
        </Collapse>
    );
};

export default MaterialCollapse;
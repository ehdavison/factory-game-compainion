import { Box, Text, Input, Flex, Popover, PopoverTrigger, PopoverContent, Button, Stack, StackDivider, Image } from '../../components/ui'
import Layout from '../../components/ui/layout'
import Navbar from '../../components/ui/navbar'
import Card from '../../components/card'
import cardLibrary from '../../public/factory-data/data.json'
import { useMemo, useRef, useState } from 'react'
import { filter, flatten, pathEq, pathOr } from 'ramda'
import Scrollbars from 'react-custom-scrollbars'
import { HStack, useOutsideClick } from '@chakra-ui/react'
import MaterialCollapse from '../../components/materialCollapse'


export default function Home() {

  const [selectedMaterial, setSelectedMaterial] = useState(null);
  
  const itemsList = useMemo(() => {
    const items = cardLibrary.items
    const recipes = cardLibrary.recipes
    const list = flatten(items, recipes)
    return list
  },[cardLibrary])

  const baseMaterialsList = useMemo(() => {
    const items = filter(item => {
      return item?.base_material === true
    }, itemsList)
    return items
  }, [itemsList])
  



  

  return (
    <Layout>
      <Flex w='100%' justifyContent='center'>
        <Box w='70%' h='auto' py='5em'>
          

            <Flex 
                w='100%' 
                h='auto' 
                bgColor='white' 
                borderRadius='10px' 
                p='1em' 
                my='3em'
                boxShadow='base'
            >
            <HStack h='100%'>
              {baseMaterialsList?.map((item, i) => {
                const { image } = item
                return (
                  <Box
                    _hover={{
                      background: 'blue.100',
                    }}
                    onClick={() => setSelectedMaterial(item)}
                    cursor='pointer'
                    border='2px solid'
                    borderColor={selectedMaterial === item ? 'blue.500' : 'transparent'}
                    p='2'
                    rounded='8'
                  >
                    <Image
                    src={`factory-data/static/base_materials/${image}`}
                    alt='base_material_image'
                    />
                  </Box>
                )
              })}
            </HStack>
          </Flex>
          {/* {cardLibrary?.resources.map((card, i) => {
            return (
              <Card card={card} />
            )
          })} */}
          <Box h='auto' boxShadow='base'>
            <MaterialCollapse material={selectedMaterial}/>
          </Box>
      
        </Box>
      </Flex>
    </Layout>
  )
}

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
  



  const popoverRef = useRef()
  const [isModalOpen, setIsModalOpen] = useState(false)
  useOutsideClick({
    ref: popoverRef,
    handler: () => setIsModalOpen(false),
  })

  return (
    <Layout>
      <Flex w='100%' justifyContent='center'>
        <Box w='70%' h='auto' py='5em'>
          <Popover
            autoFocus={false}
            isOpen={isModalOpen}
            onOpen={() => {
              setIsModalOpen(true)
            }}
            onClose={() => {
              setIsModalOpen(false)
            }}
          >
            <PopoverTrigger
            onClick={() => {
              setIsModalOpen(!isModalOpen)

            }}
            >
              <Input></Input>
            </PopoverTrigger>
            <PopoverContent ref={popoverRef}>
              <Box h='35em'>
                <Scrollbars>
                  <Stack divider={<StackDivider />}>
                      {itemsList?.map((item, i) => {
                        return (
                          // includes from ramda will narrow down the list
                          // https://ramdajs.com/docs/#includes
                          <Box textAlign='center' key={item.name}>
                            <Text>
                              {item.name}
                            </Text>
                          </Box>
                        )
                      })}
                  </Stack>
                </Scrollbars>
              </Box>
            </PopoverContent>
          </Popover>

          <Flex w='100%' h='auto' border='solid navy 4px' borderRadius='10px' p='1em' my='3em'>
            <HStack h='100%'>
              {baseMaterialsList?.map((item, i) => {
                const { image } = item
                return (
                  <Box
                    _hover={{
                      background: 'grey',
                    }}
                    onClick={() => setSelectedMaterial(item)}
                    cursor='pointer'
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
          <Flex w='100%' h='auto'>
            <MaterialCollapse material={selectedMaterial}/>
          </Flex>
      
        </Box>
      </Flex>
    </Layout>
  )
}

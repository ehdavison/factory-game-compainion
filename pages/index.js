import { Box, Text, Input, Flex, Popover, PopoverTrigger, PopoverContent, Button, Stack, StackDivider } from '../components/ui'
import Layout from '../components/ui/layout'
import Navbar from '../components/ui/navbar'
import Card from '../components/card'
import cardLibrary from '../public/factory-data/data.json'
import { useMemo, useRef, useState } from 'react'
import { flatten } from 'ramda'
import Scrollbars from 'react-custom-scrollbars'
import { useOutsideClick } from '@chakra-ui/react'

export default function Home() {


  
  const itemsList = useMemo(() => {
    const items = cardLibrary.items
    const recipes = cardLibrary.recipes
    const list = flatten(items, recipes)
    return list
  },[cardLibrary])

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
          {/* {cardLibrary?.resources.map((card, i) => {
            return (
              <Card card={card} />
            )
          })} */}
      
        </Box>
      </Flex>
    </Layout>
  )
}

import { useOutsideClick } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Box, Flex, Button } from '../ui/'


const Navbar = () => {
    const router = useRouter()
    const tabs = [
        {
            id: 'home',
            text: 'Home',
            value: '/',
        },
        {
            id: 'signin',
            text: 'Log In',
            value: '/signin',
        },
        {
            id: 'signup',
            text: 'Sign Up',
            value: '/signup',
        }
    ]

    const popoverRef = useRef()
    const [isModalOpen, setIsModalOpen] = useState(false)
    useOutsideClick({
        ref: popoverRef,
        handler: () => setIsModalOpen(false),
    })
    return (
        <Flex h='5em' w='100%' bgColor='#4F5A5D' alignItems='center'>
            {tabs.map(tab => {
                return (
                    <Button
                        bgColor='#F5D701' 
                        onClick={() => router.push(tab.value)}
                        mx='0.5em'
                        key={tab.id}
                    >
                        {tab.text}
                    </Button>
                )
            })}
        {/* <Popover
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
          </Popover> */}
        </Flex>
    );
};

export default Navbar;
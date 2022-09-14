import { useRouter } from 'next/router';
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
            id: 'home',
            text: 'Home',
            value: '/',
        },
        {
            id: 'home',
            text: 'Home',
            value: '/',
        }
    ]
    return (
        <Flex h='5em' w='100%' bgColor='blue' alignItems='center'>
            {tabs.map(tab => {
                return (
                    <Button 
                        onClick={() => router.push(tab.value)}
                    >
                        {tab.text}
                    </Button>
                )
            })}
        </Flex>
    );
};

export default Navbar;
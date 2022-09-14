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
    return (
        <Flex h='5em' w='100%' bgColor='#4F5A5D' alignItems='center'>
            {tabs.map(tab => {
                return (
                    <Button
                        bgColor='#F5D701' 
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
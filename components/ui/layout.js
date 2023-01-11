import React from 'react';
import Navbar from '../ui/navbar'
import { Box } from '../ui'

const Layout = ({ children }) => {
    return (
        <Box boxSize='100%' bgColor='gray.150' h='100vh' w='100vw'>
            <Box w='100%'>
                <Navbar />
                {children}
            </Box>
        </Box>
    )
};

export default Layout;
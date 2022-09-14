import React from 'react';
import Navbar from '../ui/navbar'
import { Box } from '../ui'

const Layout = ({ children }) => {
    return (
        <Box boxSize='100%' bg='gray.50'>
            <Box w='100%'>
                <Navbar />
                {children}
            </Box>
        </Box>
    )
};

export default Layout;
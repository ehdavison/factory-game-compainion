import { redirect } from 'next/dist/server/api-utils'
import { Flex, Text, Box } from '../components/ui'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/ui/navbar'

export default function Home() {



  return (
    <Box w='100%'>
      <Navbar />
      <Box w='100%' h='auto' bgColor='blue'>
        
      </Box>
    </Box>
  )
}

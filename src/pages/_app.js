import '../../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import '../libs/fa'
import theme from '../../components/ui/theme'

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

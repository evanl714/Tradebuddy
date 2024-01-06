import { SaasProvider } from '@saas-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <SaasProvider><ChakraProvider theme={theme}><Component {...pageProps} /></ChakraProvider></SaasProvider>
}

export default MyApp

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  colors: {
    gray: {
      0: '#A5AEBD',
      10: '#A5AEBD1A',
      20: '#A5AEBD33',
      100: '#A5AEBDFF',
      dark: '#1D1F26CC'
    },
    accent: {
      alpha: {
        100: '#2F7BFF',
        50: '#2f7bff80'
      },
      pressed: '#0057FF'
    },
    red: {
      100: '#FF0044'
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App/>
    </ChakraProvider>
  </React.StrictMode>
)

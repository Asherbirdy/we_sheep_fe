import { BrowserRouter } from 'react-router-dom'
import Routing from './routes/Routing'
import ReactDOM from 'react-dom/client'
import { ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 1000 * 60 * 10  } } })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
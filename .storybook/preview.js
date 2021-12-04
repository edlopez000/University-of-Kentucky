import '../src/index.css'
import theme from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // controls: {
  //   matchers: {
  //     color: /(background|color)$/i,
  //     date: /Date$/,
  //   },
  // },
  chakra: {
    theme: theme
  }
}


// import React from 'react'
// import { addDecorator} from '@storybook/react'
// import { ChakraProvider } from '@chakra-ui/react';
// import theme from "../src/theme"

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
// };

// addDecorator((storyFn) => (
//   <ChakraProvider theme={theme}>
//     {storyFn()}
//   </ChakraProvider>
// ))


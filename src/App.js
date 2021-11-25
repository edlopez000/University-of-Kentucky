import './App.css';
import { ChakraProvider, Box, Text } from "@chakra-ui/react"
import theme from './theme';
import Navbar from "../src/components/Navbar"
import Home from "../src/components/homePage/Home"

function App() {
  return (
    <ChakraProvider theme={theme} >
      <Box>
        <Navbar />
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;

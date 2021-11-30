import './App.css';
import { ChakraProvider, Box, Text } from "@chakra-ui/react"
import theme from './theme';
import Navbar from "../src/components/Navbar"
import Home from "../src/components/homePage/Home"
import Footer from './components/Footer';
import LoginForm from './components/Forms/LoginForm'


function App() {
  return (
    <ChakraProvider theme={theme} >
      <Box 
       d="flex"
       flexDirection="column"
       h="100vh"
       >
        <Navbar />
        <Home />
        <LoginForm />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;

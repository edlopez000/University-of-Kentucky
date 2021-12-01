import './App.css';
import { ChakraProvider, Box } from "@chakra-ui/react"
import theme from './theme';
import Navbar from "../src/components/Navbar"
import PersonTeaser from './components/Teasers/PersonTeaser'
import Footer from './components/Footer'


function App() {
  const img = "https://magicyeti.us/600/400/*/"
  const title = 1
  console.log(title)
  return (
    <ChakraProvider theme={theme} >
      <Box 
       d="flex"
       flexDirection="column"
       h="100vh"
       
       >
        <Navbar />
        <PersonTeaser />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;

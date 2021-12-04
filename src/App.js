import './App.css';
import { ChakraProvider, Box } from "@chakra-ui/react"
import theme from './theme';
import Navbar from "../src/components/Navbar"
import SidebarProfile from './components/EditorialSlabs/SidebarProfile';
import Login from './components/Login';


function App() {
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
        <Login />      
       
      </Box>
      {/* Footer needs to be Sticky footer */}
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default App;

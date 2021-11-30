import React from 'react';
import { Box, Text, Link, List, ListItem, Image, Icon } from '@chakra-ui/react';
import UkLogo from './UkLogo'

export default function Navbar() {
	return (
		<Box w="100%" bg="orange" minH="250px" h="15em" bg="brand.900">
            <Box 
             w="100%"
             h="17%"
             bg="brand.300"
             d='flex'
             justifyContent="flex-end"
             pr="10em"
             alignItems="center">
                <Link>Resources</Link>
                <Link
                 pl="1em">MyUK</Link>
                <Link
                 pl="1em">Search</Link>
            </Box>
			<Box
             w="83%"
             ml="8em"
             h="80%">
				<Box h="70%" d="flex" justifyContent="space-between">
					<Box w="30%" d="flex" justifyContent="space-around" alignItems="end" fontWeight="extrabold" pb="1em">
						<Link>Apply</Link>

						<Link>Give</Link>

						<Link>Visit</Link>

						<Link>#UK4KY</Link>
					</Box>
                
				</Box>
                <hr />
                <List 
                 d='flex'
                 flexDirection='row'
                 justifyContent="space-between"
                 pt="1em"
                 fontWeight="extrabold">
                    <ListItem>
                        <Link>About UK</Link>
                    </ListItem>
                    <ListItem>
                        <Link>Academics</Link>
                    </ListItem>
                    <ListItem>
                        <Link>Admission</Link>
                    </ListItem>
                    <ListItem>
                        <Link>Athletics</Link>
                    </ListItem>
                    <ListItem>
                        <Link>Current Students</Link>
                    </ListItem>
                    <ListItem>
                        <Link>Research</Link>
                    </ListItem>
                    <ListItem>
                        <Link>UK Health Care</Link>
                    </ListItem>
                </List>
			</Box>
		</Box>
	);
}

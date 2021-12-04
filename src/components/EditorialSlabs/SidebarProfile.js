import React from 'react';
import { Box, Image, Text, List, ListItem, } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

// src="https://magicyeti.us/300/300/*/"
export default function SidebarProfile() {
    return (
        <Box d="flex" justifyContent="space-around">
            <Box d="flex">
                <Image src="https://magicyeti.us/300/300/*/" />
                <Box d="flex" flexDirection="column">
                    <Box d="flex">
                        <ChevronRightIcon />
                        <Text
                         _hover={{color: "hover.100"}}>College or department</Text>
                    </Box>
                    <Box pl="1em">
                        <Text>College or department</Text>
                    </Box>
                    <Box d="flex">
                        <ChevronRightIcon />
                        <Text>859.257.7617</Text>
                    </Box>
                    <Box d="flex">
                        <ChevronRightIcon />
                        <Text>Nmiller@lynch.com</Text>
                    </Box>
                </Box>
            </Box>
            <Box bg="sideNavSection.100" w="300px">
                <Box d="flex">
                    <ChevronRightIcon />
                    <Text>Parent Page Section</Text>
                </Box>
                <List>
                    <ListItem>
                        <Text>Parent Page Section</Text>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

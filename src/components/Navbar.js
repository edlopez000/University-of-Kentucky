import React from 'react'
import { Box, Text, Link } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Box w="100%"
            bg="orange"
            h="15em"
            bg="brand.900"
        >
            <Box
                h="70%"
                w="83%"
                ml="8em"
                d='flex'
                justifyContent="space-between">
                <Text
                    color="brand.100"
                >University of Kentucky
             </Text>
                <Box
                    w="30%"
                    d='flex'
                    justifyContent='space-around'
                    alignItems="end"
                    fontWeight="extrabold"
                >
                    <Link

                    >
                        Apply
             </Link>

                    <Link
                    >
                        Give
             </Link>

                    <Link
                    >
                        Visit
             </Link>

                    <Link
                    >
                        #UK4KY
             </Link>
                </Box>
            </Box>
        </Box>
    )
}
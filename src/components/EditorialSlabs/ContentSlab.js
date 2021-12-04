import React from "react"
import { Box, Text, Hstack, HStack } from "@chakra-ui/react"

export default function ContentSlab() {
    return (
        <Box>
            <HStack>
                <Text>By Gage McDermott</Text>
                <Text>|</Text>
                <Text>Sep 23, 2019 - 3:35 pm</Text>
            </HStack>
        </Box>
    )
}
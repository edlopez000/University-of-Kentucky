import React from "react"
import {HStack, VStack, Box, Image, Text, Button, Link} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import PropTypes from "prop-types"

export default function MicroTeaser({
    title = "Title of The Micor Teaser",
    img = "https://magicyeti.us/300/300/*/",
    body = "Default Micro Teaser Body Text.... One Punch Man Is a great show"
}) {
    return(
        <Box>
            <Text fontSize="3xl" pb="1em">{title}</Text>
        <HStack>
            <Box mr="1em">
                <Image src={img} w="50vh" h="50vh" />
            </Box>
            <Box>
                <Text fontSize="lg">
                    {body}
                </Text>
                <HStack>
                <Button bg="teasers.100">Click Me</Button>
                <ChevronRightIcon />
                <Link _hover={{textDecoration: 'none', color: "hover.100"}}>I am a Link</Link>
                </HStack>
     
                
            </Box>
        </HStack>
        </Box>

    )
}

MicroTeaser.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}
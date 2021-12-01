import React from 'react';
import { Image, Box, Text } from '@chakra-ui/react';
import PropTypes from "prop-types"



export default function Teaser({ img = "https://magicyeti.us/600/400/*/", title = "Default Teaser Title", body = "Default Body of Teaser"}) {
	return (
		<Box w="100vw">
			<Image src={img} h="400px" w="50vw" />
            <Text pt="1em" fontSize="lg">Optional SuperHead</Text>
            <Text fontSize="3xl">{title}</Text>
            <Text fontSize="lg">Optional SubHead</Text>
            <Text fontSize="2xl"> {body}
            </Text>
		</Box>
	);
}

Teaser.propTypes = {
    img: PropTypes.string.isRequired,
    superHead: PropTypes.string,
    title: PropTypes.string.isRequired,
    subHead: PropTypes.string,
    body: PropTypes.string.isRequired
}

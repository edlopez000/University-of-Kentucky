import React from 'react';
import { Image, Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function Teaser({
	img = 'https://magicyeti.us/600/400/*/',
	title = 'Default Teaser Event Title',
    eventBody = 'Default Body of Teaser',
    eventInfo = 'By Isaias Schaden Sep 23, 2019 - 3:35 pm'
}) {
	return (
		<Box w="100vw">
			<Image src={img} h="400px" w="50vw" />
			<Text fontSize="lg">Optional SuperHead</Text>
			<Text fontSize="3xl">{title}</Text>
			<Text fontSize="lg">Optional SubHead</Text>
            <Text fontSize="2xl">{eventInfo}</Text>
            <Text fontSize="lg">eventInfo Subhead</Text>
			<Text fontSize="2xl"> {eventBody}</Text>
		</Box>
	);
}

Teaser.propTypes = {
	img: PropTypes.string.isRequired,
	superHead: PropTypes.string,
	title: PropTypes.string.isRequired,
    subHead: PropTypes.string,
    eventInfo: PropTypes.string.isRequired,
	eventBody: PropTypes.string.isRequired
};

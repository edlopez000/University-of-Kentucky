import React from 'react'
import { Box, Text } from "@chakra-ui/react"
import PropTypes from "prop-types"

export default function EventSlab({
    date = "Sep 23, 2019 - 3:35 pm — Sep 23, 2019 - 6:35 pm",
    header = "Memorial Coliseum: Map - Details",
    subHeader = "Consequatur , Deserunt , Aut"
}) {

    return (
        <Box pt="2em">
            <Text fontSize="2xl">{date}</Text>
            <Text fontSize="xl">{header}</Text>
            <Text fontSize="lg">{subHeader}</Text>
        </Box>
    )
}

EventSlab.propTypes = {
    data: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string
}

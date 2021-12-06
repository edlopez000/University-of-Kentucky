import { Box, Button } from "@chakra-ui/react"

export default function NButton({onClick}) {
    return (
        <Box>
            <Button onClick={onClick}>Click Me</Button>
        </Box>
    )
}
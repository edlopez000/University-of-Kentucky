import React from 'react'
import {FormControl, FormLabel, Input, Text, Button, HStack} from '@chakra-ui/react'
import {SearchIcon} from "@chakra-ui/icons"

export default function SearchForm() {
    const [search, setSearch] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchParams = []

        searchParams.push(search)
        setSearch('')
        console.log(searchParams)
    }
    return (
        <FormControl maxW="400px">
            <FormLabel>Search Form</FormLabel>
            <HStack>
            <Input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='UserName'/>
            <Button bg="brand.900" type="submit" onClick={handleSubmit}>
            <SearchIcon /> 
            </Button>
            </HStack>
        </FormControl>
    )
}
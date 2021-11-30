import React from 'react'
import {FormControl, FormLabel, Input, Text, Button} from '@chakra-ui/react'

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
            <Input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='UserName'/>
            <Text fontSize='sm'>Enter your UK D8 username.</Text>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </FormControl>
    )
}
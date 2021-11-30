import React from 'react'
import {FormControl, FormLabel, Input, Text} from '@chakra-ui/react'

export function SearchForm() {
    return (
        <FormControl>
            <FormLabel>Search Form</FormLabel>
            <Input type="text" placeholder='UserName'/>
            <Text fontSize='sm'>Enter your UK D8 username.</Text>
        </FormControl>
    )
}
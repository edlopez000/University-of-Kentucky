import React from 'react'
import {FormControl, FormLabel, Input, Text, Button} from '@chakra-ui/react'


export function LoginForm() {
    const [userName, setUserName] = React.useState('')
    const [password, setPassWord] = React.useState('')
    return (
        <FormControl>
            <FormLabel>UserName</FormLabel>
            <Input value={userName} type="text" placeholder='UserName'/>
            <Text fontSize='sm'>Enter your UK D8 username.</Text>
            <FormLabel>Password</FormLabel>
            <Input value={password} type="text" placeholder='password'/>
            <Text fontSize='sm'>Enter the password that accompanies your username.</Text>
            <Button bg='brand.900'>Log In</Button>
        </FormControl>
    )
}

export default LoginForm


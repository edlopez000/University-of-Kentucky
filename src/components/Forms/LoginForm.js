import React from 'react'
import {FormControl, FormLabel, Input, Text, Button} from '@chakra-ui/react'


export function LoginForm() {
    const [userName, setUserName] = React.useState('')
    const [password, setPassWord] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = []
        userData.push(userName, password)
        setUserName('')
        setPassWord('')
        console.log(userData)
    }
    return (
        <FormControl w="400px">
            <FormLabel>UserName</FormLabel>
            <Input onChange={ (e) => setUserName(e.target.value)} value={userName} type="text" placeholder='UserName'/>
            <Text fontSize='sm'>Enter your UK D8 username.</Text>
            <FormLabel>Password</FormLabel>
            <Input onChange={ (e) => setPassWord(e.target.value)} value={password} type="password" placeholder='password'/>
            <Text fontSize='sm'>Enter the password that accompanies your username.</Text>
            <Button type="submit" onClick={handleSubmit} bg='brand.900'>Log In</Button>
        </FormControl>
    )
}

export default LoginForm

